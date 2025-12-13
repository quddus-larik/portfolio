import BounceCards from "@/components/BounceCards";
import ScrollVelocity from "@/components/custom/ScrollVelocity";
import Shuffle from "@/components/Shuffle";
import { Button } from "@/components/ui/button";
import { RevealText } from "../custom/revealtext";
import { SiDribbble, SiGithub } from "react-icons/si";

interface AboutMeInterface {
    images: string[],
    transformStyles: string[]
}

export function AboutMe({ images, transformStyles}: AboutMeInterface){
    return(
        <div className="flex h-svh w-full">
                <div className="min-h-svh w-svw bg-gray-50  gap-2 flex-col  flex p-5" >
                    <div className="flex flex-col gap-4 w-full h-full">
                        <div className="col-span-full row-span-2 sm:col-span-full sm:row-span-auto w-full bg-transparent grid place-content-center">
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
                        <div className="w-full flex flex-col gap-2 items-start">
                            <div className="w-full flex flex-col items-start justify-start">
                                <div className="w-full">
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
                                        className='font-akira text-2xl md:text-4xl'
                                    />
                                    <RevealText duration={1} >
                                        <div className='font-clash font-medium lg:text-xl sm:text-sm md:text-lg text-left'>Skilled in  MongoDB, Express.js, React, and Node. with a strong commitment to building intuitive user experiences and writing efficient, maintainable code. Dedicated to turning ideas into real-world digital solutions and always eager to collaborate, learn, and grow through impactful projects.</div>
                                    </RevealText>
                                </div>
                                <div className='w-full flex gap-3 mt-4'>
                                    <Button className='font-clash font-medium rounded-none tracking-wider'><SiGithub />Github</Button>
                                    <Button className='font-clash font-medium rounded-none tracking-wider'><SiDribbble />Dribbble</Button>
                                </div>
                                <div className="relative mt-4 overflow-hidden -rotate-1 opacity-15">
                                    <div className="mt-6 mb-2 bg-slate-200" />
                                    <ScrollVelocity
                                        texts={["MONGODB ✦ EXPRESSJS ✦ REACTJS ✦ NODEJS ✦ "]}
                                        velocity={40}
                                        className="font-akira whitespace-nowrap text-gray-900"
                                    />
                                    <div className="mt-2 bg-slate-200" />
                                    <div className="absolute top-0 left-0 w-24 h-full pointer-events-none bg-linear-to-r from-white to-transparent" />
                                    <div className="absolute top-0 right-0 w-24 h-full pointer-events-none bg-linear-to-l from-white to-transparent" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}