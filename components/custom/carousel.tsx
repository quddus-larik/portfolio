"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
    children: React.ReactNode[];
    className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
    const [index, setIndex] = useState(0);
    const total = children.length;

    const next = () => {
        setIndex((prev) => (prev + 1) % total);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    return (
        <div className={cn("relative w-full", className)}>
            {/* VIEWPORT */}
            <div className="overflow-hidden px-[12%]">
                <div
                    className="flex gap-6 transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {children.map((child, i) => {
                        const isActive = i === index;

                        return (
                            <div
                                key={i}
                                className={cn(
                                    "min-w-full transition-all duration-500",
                                    isActive
                                        ? "opacity-100 scale-100"
                                        : "opacity-40 scale-[0.95] shadow-xl"
                                )}
                            >
                                {child}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CONTROLS */}
            <div className="absolute left-0 top-1/2 h-full -translate-y-1/2 bg-linear-to-r from-gray-200 to-transparent">
                <Button
                    size={"icon-sm"}
                    onClick={prev}
                    className="rounded-none"
                >
                    <ArrowLeft />
                </Button>
            </div>

            <div className="absolute right-0 top-1/2 h-full -translate-y-1/2 text-white px-3 py-2 text-xs bg-linear-to-l from-gray-200 to-transparent">
            <Button
                size={"icon-sm"}
                onClick={next}
                className="rounded-none"
            >
                <ArrowRight/>
            </Button>
            </div>

            {/* PROGRESS */}
            <div className="mt-4 h-[3px] bg-black/20 w-full">
                <div
                    className="h-full bg-black transition-all duration-500"
                    style={{ width: `${((index + 1) / total) * 100}%` }}
                />
            </div>
        </div>
    );
}
