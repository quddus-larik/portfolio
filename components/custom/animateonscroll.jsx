"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScaleRotateBox() {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!boxRef.current) return;

    gsap.fromTo(
      boxRef.current,
      { scale: 0.7, rotate: 0 },
      {
        scale: 1.3,
        rotate: 90,               // rotate degrees
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 85%",
          end: "top 25%",
          scrub: 1,              // smooth scroll binding
        },
      }
    );
  }, []);

  return (
    <div className="min-h-[150vh] flex items-center justify-center">
      <div ref={boxRef} className="h-40 w-40 bg-black" />
    </div>
  );
}
