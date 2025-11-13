"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/custom/navbar';
import { DotBackground, GridBackground } from '@/components/custom/backeground';
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import { SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const containerRef = useRef<HTMLDivElement>(null);

    const numberOfSections = 3;

    useGSAP(() => {

        const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section");

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

    }, { scope: containerRef }); // Scope useGSAP to the container

    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <GridBackground>
                <div className="h-svh w-svw bg-gray-50 flex justify-center items-end">
                    <div className='absolute left-1/2 -translate-x-1/2 top-30 w-full'>
                        <p className='w-full text-center font-akira text-[192px]'>QUDD<span className='font-pixelify font-extrabold'>U</span>S</p>
                    </div>
                    <img className='z-10' src={"/images/robot.png"} alt='robot' width={900} />
                </div>
            </GridBackground>


            <div ref={containerRef} className="flex h-svh w-full">
                <div className='h-svh w-svw shrink-0 horizontal-section flex items-center justify-center gap-2'>
                    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                        <EvervaultCard object={<SiNextdotjs className='text-black dark:text-white text-6xl' />} from='black' />

                        <h2 className="dark:text-white text-black mt-4 text-lg font-pops">
                            I Build Creative UX focused UI using Reactjs. I primerly use javascript to build Amazings things.
                        </h2>
                    </div>

                    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                        <EvervaultCard object={<SiTypescript className='text-sky-700 text-6xl' />} from='blue' />

                        <h2 className="dark:text-white text-black mt-4 text-lg font-pops">
                            I Build Creative UX focused UI using Reactjs. I primerly use javascript to build Amazings things.
                        </h2>
                    </div>

                    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                        <EvervaultCard object={<SiReact className='text-sky-600 text-6xl' />} />

                        <h2 className="dark:text-white text-black mt-4 text-lg font-pops">
                            I Build Creative UX focused UI using Reactjs. I primerly use javascript to build Amazings things.
                        </h2>
                    </div>
                </div>
                <div className="h-svh w-svw bg-red-300 shrink-0 horizontal-section flex items-center justify-center" >
                    <motion.p className='font-akira-bd' initial={{ fontSize: "32px", rotate: "10deg" }} whileInView={{ fontSize: "120px", rotate: "0deg" }} viewport={{ once: false }} transition={{ duration: 0.60 }}>Hi!</motion.p>
                </div>
                <div className="h-svh w-svw bg-green-300 shrink-0 horizontal-section flex items-center justify-center" >
                    <motion.p className='font-akira-bd' initial={{ fontSize: "32px", rotate: "10deg" }} whileInView={{ fontSize: "120px", rotate: "0deg" }} viewport={{ once: false }} transition={{ duration: 0.70 }}>Whoo!</motion.p>
                </div>
            </div>
            <div className="h-svh w-svw bg-purple-300" />
        </div>
    );
}
