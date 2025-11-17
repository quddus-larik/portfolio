"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function RevealText({
  children,
  duration = 0.35,   // top line duration
  delay = 0,         // initial delay
}) {
  const containerRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    document.fonts.ready.then(() => {
      gsap.set(containerRef.current, { opacity: 1 });

      splitRef.current = SplitText.create(containerRef.current, {
        type: "lines",
        linesClass: "line",
        mask: "lines",

        onSplit: (self) => {
          const lines = self.lines;

          // you wanted: each next line is faster (< 300ms)
          const maxDuration = duration;     // top line
          const minDuration = 0.15;         // bottom line (fastest)

          const tl = gsap.timeline({
            delay,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              toggleActions: "restart none none reset",
            },
          });

          lines.forEach((line, index) => {
            const progress = index / (lines.length - 1);

            // duration decreases per line
            const dynamicDuration =
              maxDuration - progress * (maxDuration - minDuration);

            tl.from(
              line,
              {
                yPercent: 120,
                opacity: 0,
                duration: dynamicDuration,
                ease: "expo.out",
              },
              index * 0.25 // stagger
            );
          });

          if(splitRef.current){
            splitRef.current.anim = tl;
          }
          return tl;
        },
      });
    });

    return () => {
      splitRef.current?.revert();
    };
  }, [duration, delay]);

  return (
    <span
      ref={containerRef}
      className="split block overflow-hidden"
    >
      {children}
    </span>
  );
}
