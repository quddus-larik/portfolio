"use client"

import React, { useState } from "react" // Import useState
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion" // Import useMotionValueEvent
import {
    HomeIcon,
    PencilIcon,
} from "lucide-react"

// Import Configs function from the new file
import { Configs } from "@/configs/settings"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/components/ui/dock"


const { socialurls } = Configs();

const NavbarLinks = [
    { href: "#", icon: HomeIcon, label: "Home" },
    { href: "#", icon: PencilIcon, label: "Blog" },
];

const MotionDock = motion(Dock);

export const Navbar = () => {

    // Removed unused 'number' import
    // Renamed scrollYProgress to scrollY for clarity (optional, but clean)
    const { scrollYProgress } = useScroll();
    
    // State to manage the conditional class
    const [scrolled, setScrolled] = useState(false);

    // Use useMotionValueEvent to listen for changes to scrollYProgress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        
        if (latest > 0.2 && !scrolled) {
            setScrolled(true);
        } else if (latest <= 0.1 && scrolled) {
            setScrolled(false);
        }
    });

    return (
        <motion.div 
            className={`fixed left-1/2 -translate-x-1/2 z-20`}
            initial={{ top: 40 }}
            animate={{ top: scrolled? -35 : 40 }}
        >
            <div className="flex flex-col items-center justify-center">
                <TooltipProvider>
                    {/* Apply the conditional class using the standard state variable */}
                    <MotionDock 
                        direction="middle" 
                        className={cn(
                            "bg-black transition-all duration-300", // Added transition for smooth change
                            scrolled ? "rounded-t-none" : ""
                        )}
                    >
                        {/* Static Navbar Links */}
                        {NavbarLinks.map((item) => (
                            <DockIcon key={item.label}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={item.href}
                                            aria-label={item.label}
                                            className={cn(
                                                buttonVariants({ variant: "ghost", size: "icon" }),
                                                "size-12 rounded-full hover:bg-gray-700"
                                            )}
                                        >
                                            <item.icon className="size-4 text-white" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{item.label}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        ))}
                        <Separator orientation="vertical" className="h-full" />
                        
                        {/* Dynamic Social Links from Configs */}
                        {socialurls.map((social) => (
                            <DockIcon key={social.title}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={social.link}
                                            aria-label={social.title}
                                            className={cn(
                                                buttonVariants({ variant: "ghost", size: "icon" }),
                                                "size-12 rounded-full hover:bg-gray-800"
                                            )}
                                        >
                                            <social.icon className="size-4 text-white" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{social.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        ))}
                    </MotionDock>
                </TooltipProvider>
            </div>
        </motion.div>
    )
}