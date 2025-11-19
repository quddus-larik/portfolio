"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;

  /** 👇 NEW OPTION */
  playWhenInView?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  playWhenInView = true,
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [canAnimate, setCanAnimate] = useState(!playWhenInView);

  // Wait for fonts
  useEffect(() => {
    if (document.fonts.status === 'loaded') setFontsLoaded(true);
    else document.fonts.ready.then(() => setFontsLoaded(true));
  }, []);

  // 👇 Intersection Observer — enables animation only when visible
  useEffect(() => {
    if (!playWhenInView) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCanAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [playWhenInView]);

  // GSAP animation
  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded || !canAnimate) return;

      const el = ref.current as HTMLElement & {
        _rbsplitInstance?: GSAPSplitText;
      };

      // cleanup previous
      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (_) { }
        el._rbsplitInstance = undefined;
      }

      let targets: Element[] = [];

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: (self: GSAPSplitText) => {
          if (self.chars?.length) targets = self.chars;
          if (!targets.length && self.words.length) targets = self.words;
          if (!targets.length && self.lines.length) targets = self.lines;

          return gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: 0.04,
              scrollTrigger: {
                trigger: el,
                start: () => {
                  // Start when element is near bottom of viewport
                  const rect = el.getBoundingClientRect();
                  return `top ${window.innerHeight * 0.85}px`;
                },
                end: () => {
                  // End after element has fully passed viewport or horizontal container
                  const rect = el.getBoundingClientRect();
                  return `top ${window.innerHeight * 0.2}px`;
                },
                scrub: true, // tie animation to scroll
                markers: false,
              },

              onComplete: () => {
                animationCompletedRef.current = true;
                onLetterAnimationComplete?.();
              }
            }
          );
        }
      });

      el._rbsplitInstance = splitInstance;

      return () => {
        try {
          splitInstance.revert();
        } catch (_) { }
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        canAnimate
      ],
      scope: ref
    }
  );

  const style: React.CSSProperties = {
    textAlign,
    wordWrap: 'break-word',
  };
  const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;

  return React.createElement(tag, { ref, className: classes, style }, text);
};

export default SplitText;
