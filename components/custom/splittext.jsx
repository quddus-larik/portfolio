"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export function ScrollSplitText({
  text,
  className = '',
  splitType = 'chars', // 'chars' | 'words' | 'lines'
  ease = 'power3.out',
  duration = 1,
}) {
  const ref = useRef(null);
  const stRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Split the text
    const splitInstance = new GSAPSplitText(el, { type: splitType });

    // Determine targets
    let targets = [];
    if (splitType.includes('chars')) targets = splitInstance.chars || [];
    else if (splitType.includes('words')) targets = splitInstance.words || [];
    else if (splitType.includes('lines')) targets = splitInstance.lines || [];

    if (!targets.length) return;

    // Scroll-dependent animation
    stRef.current = gsap.fromTo(
      targets,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        ease,
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          markers: false,
          id: `split-${Math.random()}`, // unique id
        },
      }
    );

    return () => {
      splitInstance.revert();
      stRef.current?.scrollTrigger?.kill();
      stRef.current?.kill();
    };
  }, [text, splitType, ease, duration]);

  return (
    <div ref={ref} className={`overflow-hidden inline-block ${className}`}>
      {text}
    </div>
  );
}
