"use client";

import { SiGithub } from "react-icons/si";
import { RevealText } from "../custom/revealtext";
import { Button } from "../ui/button";
import { Lens } from "../ui/lens";
import { ArrowUpRight } from "lucide-react";
import { Carousel } from "@/components/custom/carousel";

interface ProjectInterface {
    title: string;
    date: string;
    url: string;
    label: string;
    img: string;
    giturl: string;
    alt: string;
}

export function Projects({ projects }: { projects: ProjectInterface[] }) {
    return (
            <div className="sticky top-0 min-h-svh flex flex-col gap-4 bg-gray-200 px-8 py-6">
                <div>
                    <div className="lg:text-8xl md:text-5xl text-2xl font-akira">
                        PROJECTS !
                    </div>
                    <p className="font-clash text-sm md:text-xl font-medium">
                        These projects really solve problems.
                    </p>
                </div>
                {/* CAROUSEL */}
                <div className="flex justify-center">
                    <Carousel className="w-full">
                        {projects.map((itm, idx) => (
                            <div
                                key={idx}
                                className="p-3 bg-gray-100 shadow-inner rounded-sm"
                            >
                                <Lens>
                                    <img
                                        src={itm.img}
                                        alt={itm.title}
                                        className="rounded-sm w-full object-cover"
                                    />
                                </Lens>

                                <div className="mt-3 flex justify-between items-center">
                                    <p className="font-clash font-semibold text-lg">
                                        {itm.title}
                                    </p>
                                    <p className="font-clash text-sm">{itm.label}</p>
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <div className="flex flex-col gap-1">
                                        <p
                                            className="font-clash text-xs cursor-pointer hover:border-b border-black w-fit"
                                            onClick={() => window.open(itm.url, "_blank")}
                                        >
                                            {itm.alt}
                                        </p>
                                        <p className="font-clash text-xs">{itm.date}</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button
                                            size="icon"
                                            className="rounded-none"
                                            onClick={() => window.open(itm.giturl, "_blank")}
                                        >
                                            <SiGithub />
                                        </Button>
                                        <Button
                                            className="rounded-none"
                                            onClick={() =>
                                                window.open(`${itm.giturl}/issues`, "_blank")
                                            }
                                        >
                                            <ArrowUpRight />
                                            Issues
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                </div>
            </div>
    );
}
