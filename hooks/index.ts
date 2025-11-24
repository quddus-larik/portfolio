"use client"

import { useEffect, useState } from "react";

interface Size {
    width: number;
    height: number;
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