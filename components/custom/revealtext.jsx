"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function RevealText({
  children,
  duration = 0.35,
  delay = 0,
  once = false, // NEW PARAM — animate only once
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
          const maxDuration = duration;
          const minDuration = 0.15;

          const tl = gsap.timeline({
            delay,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              toggleActions: once
                ? "play none none none"   // only once
                : "restart none none reset", // repeat every time
              once: once, // GSAP 3.12+ built-in once behavior
            },
          });

          lines.forEach((line, index) => {
            const progress = index / (lines.length - 1);
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
              index * 0.25
            );
          });

          if (splitRef.current) {
            splitRef.current.anim = tl;
          }
        },
      });
    });

    return () => {
      splitRef.current?.revert();
    };
  }, [duration, delay, once]);

  return (
    <span
      ref={containerRef}
      className="split block overflow-hidden"
    >
      {children}
    </span>
  );
}
