"use client";

import { Lenis } from "lenis/react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SiDribbble, SiGithub } from 'react-icons/si';
import { RevealText } from '@/components/custom/revealtext';
// Removed unused Spotlight
import BounceCards from '@/components/BounceCards';
import Shuffle from '@/components/Shuffle';
import { ScaleRotateBox } from '@/components/custom/animateonscroll';
import PixelBlast from '@/components/PixelBlast';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import MagnetLines from "@/components/MagnetLines";
import { Star } from "lucide-react";
import { Lens } from "@/components/ui/lens";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {


    const images = [
        "/images/mongo.png",
        "/images/reactjs.svg",
        "https://picsum.photos/600/600?grayscale",
        "https://picsum.photos/700/700?grayscale",
        "https://picsum.photos/300/300?grayscale"
    ];

    const transformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)"
    ];



    return (

        <Lenis root className='overflow-hidden'>

            <div className="h-svh w-full bg-gray-50 flex justify-center items-end">
                <PixelBlast
                    variant="square"
                    pixelSize={4}
                    color="#030712"
                    patternScale={2}
                    patternDensity={1}
                    pixelSizeJitter={0}
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    enableRipples
                    speed={0.6}
                    edgeFade={0.25}
                    transparent
                    className={""}
                />
                <div className='absolute left-1/2 -translate-x-1/2 top-30 w-full flex flex-col items-center justify-center gap-2 pt-16'>
                    <Shuffle
                        text="{ QUDDUS }"
                        shuffleDirection="left"
                        duration={0.35}
                        animationMode="evenodd"
                        shuffleTimes={1}
                        ease="power3.out"
                        stagger={0.03}
                        threshold={0.1}
                        triggerOnce={false}
                        triggerOnHover={true}
                        respectReducedMotion={true}
                        fontSize='10rem'
                    />
                    <RevealText duration={1}>
                        <p className='w-fit flex items-center justify-center gap-1 h-10 px-6 border rounded-full bg-slate-100/10 backdrop-blur-md border-white/10 font-clash font-medium tracking-wider'>I specialize in crafting full-stack MERN applications that turn ideas into reliable, intuitive, and goal-oriented web products.</p>
                    </RevealText>

                </div>
            </div>

            <div className="flex h-svh w-full">
                <div className="min-h-svh w-svw bg-gray-50  gap-2 flex-col  flex p-5" >
                    <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full">
                        <div className="col-span-5 row-span-2 w-full bg-transparent grid place-content-center">
                            <BounceCards
                                containerWidth={300}
                                containerHeight={250}
                                images={images}
                                animationDelay={1}
                                animationStagger={0.08}
                                easeType="elastic.out(1, 0.5)"
                                transformStyles={transformStyles}
                                enableHover={true}
                            />
                        </div>
                        <div className="col-span-3 row-span-2 col-start-2 row-start-3 w-full flex flex-col gap-2 items-start">
                            <Shuffle
                                text="About Me"
                                shuffleDirection="right"
                                duration={0.35}
                                animationMode="evenodd"
                                shuffleTimes={1}
                                ease="power3.out"
                                stagger={0.03}
                                threshold={0.1}
                                triggerOnce={false}
                                triggerOnHover={true}
                                respectReducedMotion={true}
                                fontSize='4rem'
                            />
                            <RevealText duration={1} >
                                <div className='font-clash font-medium text-xl text-left'>Skilled in  MongoDB, Express.js, React, and Node. with a strong commitment to building intuitive user experiences and writing efficient, maintainable code. Dedicated to turning ideas into real-world digital solutions and always eager to collaborate, learn, and grow through impactful projects.</div>
                            </RevealText>
                            <div className='w-full flex gap-3'>
                                <Button className='font-clash font-medium rounded-none tracking-wider'><SiGithub />Github</Button>
                                <Button className='font-clash font-medium rounded-none tracking-wider'><SiDribbble />Dribbble</Button>
                            </div>
                        </div>

                        <div className="row-span-2 col-start-1 row-start-3 w-full bg-transparent grid place-content-center ">
                            <ScaleRotateBox className='h-40 w-40 bg-black' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="sticky top-0 h-svh flex flex-col items-start justify-start bg-gray-100 px-8 py-3">
                    <div className="w-[200px] h-8 text-white bg-gray-900 my-2 text-2xl"/>
                    <RevealText duration={1}>
                        <div className="text-8xl font-akira text-left">I CREATE EXPERIENCES NOT JUST WEBSITES!</div>
                    </RevealText>

                </div>
                <div className="sticky top-13 h-svh flex gap-2 flex-col items-start justify-start bg-gray-200 px-8 py-3">
                    <div className="w-[200px] h-10 text-white bg-gray-900 my-2 ml-3 text-2xl"/>
                    <RevealText duration={1}>
                        <div className="text-8xl font-akira text-left">PROJECTS</div>
                    </RevealText>
                    

                </div>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
                    <h2 className="text-4xl">The Third Title</h2>
                    <p>Scroll Down</p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
                    <h2 className="text-4xl">The Fourth Title</h2>
                </div>
            </div>




        </Lenis>
    );
}