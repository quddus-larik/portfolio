"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/custom/navbar';
import { GridBackground } from '@/components/custom/backeground'; // Removed unused DotBackground
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import { SiDribbble, SiGithub, SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si';
import { RevealText } from '@/components/custom/copy';
// Removed unused Spotlight
import BounceCards from '@/components/BounceCards';
import Shuffle from '@/components/Shuffle';
import { ScaleRotateBox } from '@/components/custom/animateonscroll';
import PixelBlast from '@/components/PixelBlast';
import { LinkPreview } from '@/components/ui/link-preview';
import GlassSurface from '@/components/GlassSurface';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { ArrowDown } from 'lucide-react';
import { TextRoll } from '@/components/ui/text-roll';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const containerRef = useRef<HTMLDivElement>(null);

    const numberOfSections = 3;

    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section");

        if (!containerRef.current) return; // Add check for null ref

        gsap.to(sections, {
            xPercent: -100 * (numberOfSections - 1),
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: () => `+=${containerRef.current?.offsetWidth || 0}`, // Use template literal for cleaner code
                invalidateOnRefresh: true,
            },
        });
    }, { scope: containerRef });

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
        <div className='overflow-x-hidden'>

            <div className="h-svh w-svw bg-gray-50 flex justify-center items-end">
                <PixelBlast
                    variant="square"
                    pixelSize={4}
                    color="#99A1AF"
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

                    <RainbowButton className='rounded-full min-w-8 font-clash tracking-wider'>My Journey</RainbowButton>
                </div>
            </div>

            <div ref={containerRef} className="flex h-svh w-full">
                <div className="min-h-svh w-svw bg-gray-50 shrink-0 gap-2 flex-col horizontal-section flex p-5" >
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
                            <RevealText duration={1}>
                                <div className='font-clash font-medium text-xl text-left'>Skilled in <LinkPreview url='https://mongodb.com'>MongoDB</LinkPreview>, <LinkPreview url='https://expressjs.com'>Express.js</LinkPreview>, <LinkPreview url='reactjs.com'>React</LinkPreview>, and <LinkPreview url='https://nodejs.com'>Node.</LinkPreview> with a strong commitment to building intuitive user experiences and writing efficient, maintainable code. Dedicated to turning ideas into real-world digital solutions and always eager to collaborate, learn, and grow through impactful projects.</div>
                            </RevealText>
                            <div className='w-full flex gap-3'>
                                <Button className='font-clash font-medium rounded-none tracking-wider'><SiGithub />Github</Button>
                                <Button className='font-clash font-medium rounded-none tracking-wider'><SiDribbble />Dribbble</Button>
                            </div>
                        </div>

                        <div className="row-span-2 col-start-1 row-start-3 w-full bg-transparent grid place-content-center ">
                            <ScaleRotateBox />
                        </div>
                    </div>
                </div>

                {/* MODIFIED: Set viewport={{ once: false }} */}
                <div className="h-svh w-svw bg-gray-50/80 shrink-0 horizontal-section flex flex-col p-5" >
                    <TextRoll
                        className='text-8xl font-akira'
                        whileInView
                        animateOnHover
                    >FULL STACK ENGINEER</TextRoll>
                    <Shuffle
                        text="{ PROJECTS }"
                        shuffleDirection="right"
                        duration={0.50}
                        animationMode="evenodd"
                        shuffleTimes={1}
                        ease="power3.out"
                        stagger={0.03}
                        threshold={0.1}
                        triggerOnce={false}
                        triggerOnHover={true}
                        respectReducedMotion={true}
                        fontSize='2rem'
                        font='Clash'
                        style={{ fontWeight: "bold" }}
                    />

                    <div className='w-full h-full grid place-content-center'>
                        <ScaleRotateBox />
                    </div>
                </div>

                {/* MODIFIED: Set viewport={{ once: false }} */}
                <div className="h-svh w-svw bg-green-300 shrink-0 horizontal-section flex items-center justify-center" >
                    <motion.p
                        className='font-akira'
                        initial={{ fontSize: "32px", rotate: "10deg" }}
                        whileInView={{ fontSize: "120px", rotate: "0deg" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.70 }}
                    >
                        Whoo!
                    </motion.p>
                </div>

            </div>

            <div className="h-svh w-svw bg-purple-300" >
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
            </div>
        </div>
    );
}