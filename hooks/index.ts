"use client"
import { useEffect, useState } from "react";

interface Size {
    width: number;
    height: number;
}
interface UseIsMobileReturn {
  isMobile: boolean;
  isLoading: boolean;
}

export function useWindowSize(): Size {


    const [size, setSize] = useState<Size>({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });
    useEffect(() => {
        const handleResize = () => {
            setSize({ width: typeof window !== 'undefined' ? window.innerWidth : 0, height: typeof window !== 'undefined' ? window.innerHeight : 0 });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
}


export const useIsMobile = (): UseIsMobileReturn => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkIsMobile = () => {
      
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      
     
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        'android', 'webos', 'iphone', 'ipad', 'ipod', 
        'blackberry', 'windows phone', 'mobile'
      ];
      
      const isMobileUA = mobileKeywords.some(keyword => 
        userAgent.includes(keyword)
      );
      
      // Combine both checks - prioritize media query but consider user agent
      const isMobileDevice = mediaQuery.matches || 
        (isMobileUA && window.innerWidth <= 768);
      
      setIsMobile(isMobileDevice);
      setIsLoading(false);
    };

    // Initial check
    checkIsMobile();

    // Listen for media query changes
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => checkIsMobile();
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Listen for window resize
    window.addEventListener('resize', checkIsMobile);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return {
    isMobile,
    isLoading,
  };
};
