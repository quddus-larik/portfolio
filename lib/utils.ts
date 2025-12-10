import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useContainerRef(sections: number,sectionClass?: string) {

  const containerRef = useRef<HTMLDivElement>(null);

  const numberOfSections = sections;

  useGSAP(() => {

    const sections = gsap.utils.toArray<HTMLElement>(sectionClass || ".horizontal-section");

    gsap.to(sections, {
      xPercent: -100 * (numberOfSections - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + (containerRef.current?.offsetWidth || 0),
        invalidateOnRefresh: true,
      },
    });

  }, { scope: containerRef });

  return { containerRef }
}