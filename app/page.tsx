"use client";

import { Lenis } from "lenis/react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SiClerk, SiCss3, SiDribbble, SiExpress, SiGit, SiGithub, SiGithubsponsors, SiHtml5, SiMongodb, SiMysql, SiNextdotjs, SiNextui, SiNodedotjs, SiNpm, SiPnpm, SiReact, SiRedis, SiRender, SiSass, SiShadcnui, SiSupabase, SiTailwindcss, SiVercel } from 'react-icons/si';
import { RevealText } from '@/components/custom/revealtext';
// Removed unused Spotlight
import BounceCards from '@/components/BounceCards';
import Shuffle from '@/components/Shuffle';
import PixelBlast from '@/components/PixelBlast';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUpRight, Star } from "lucide-react";
import { Lens } from "@/components/ui/lens";
import { useWindowSize } from "@/hooks";
import ScrollVelocity from "@/components/custom/ScrollVelocity";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const { height, width } = useWindowSize();
    console.log("width:", width);

    const projects = [
        {
            title: 'oneManage',
            date: '2025', 
            url: 'https://one-manage.vercel.app/', 
            label: 'employee management system', 
            img: '/images/projects/one-manage.png', 
            giturl: 'https://github.com/quddus-larik/oneManage', 
            alt: 'one-manage.vercel.app'
        },
        {
            title: 'leeHooks',
            date: '2025', 
            url: 'https://lixril.vercel.app/', 
            label: 'react.js hooks npm package', 
            img: '/images/projects/leehooks.png', 
            giturl: 'https://github.com/lixril/leeHooks', 
            alt: 'lixril.vercel.app'
        },
        {
            title: 'memog',
            date: '2024', 
            url: 'https://memog.netlify.app/', 
            label: 'memeory cards game', 
            img: '/images/projects/memog.png', 
            giturl: 'https://github.com/quddus-larik/Memory-game', 
            alt: 'memog.netlify.app'
        }
    ];

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

    const initialAwards = [
        {
            title: "Web3.0 Development",
            institute: "Algorand Inc",
            description: "I had learnt how NFT, Blockchain, Decentralized applications, and other Web3.0 technologies work.",
            url: "https://algorandtechnologies.com/",
            image: "/images/algo_certificate.png",
            date: "May 2025"
        },
        {
            title: "Full Stack Development",
            institute: "codeSignal Inc",
            description: "I had learnt full stack development for creating UX focused user intefaces and scalable backend.",
            url: "https://codesignal.com/",
            image: "/images/fullstack.png",
            date: "June 2025"
        },
        {
            title: "SQL Database",
            institute: "codeSignal Inc",
            description: "I had learnt Structured Query Language for development scalable and reliable databases.",
            url: "https://codesignal.com/",
            image: "/images/mysql.png",
            date: "June 2025"
        },
        {
            title: "Azure Fundamentals",
            institute: "simplilern Inc",
            description: "I had learnt Basic Azure DevOps for backend deployment",
            url: "https://codesignal.com/",
            image: "/images/azure_certification.webp",
            date: "June 2025"
        }
    ];


    const frontendSkills = [
        { icon: SiReact, label: 'React JS' },
        { icon: SiNextdotjs, label: 'Next JS' },
        { icon: SiShadcnui, label: 'ShadCN UI' },
        { icon: SiTailwindcss, label: 'Tailwind CSS' },
        { icon: SiNextui, label: 'Hero UI' },
        { icon: SiSass, label: 'SASS / SCSS' },
        { icon: SiHtml5, label: 'HTML 5' },
        { icon: SiCss3, label: 'CSS 3' }
    ];

    const securitySkills = [
        { label: 'PRPL Pattern' },
        { label: 'Content Security Policy' },
        { label: 'CORS Restrictions' },
        { label: 'XSS Preventation' },
        { label: 'HTTPS Caching' },
        { label: 'DB Indexing' },
    ]

    const backendSkills = [
        { icon: SiNodedotjs, label: 'Node JS' },
        { icon: SiExpress, label: 'Express JS' },
        { icon: SiMongodb, label: 'Mongo DB' },
        { icon: SiMysql, label: 'MySQL DB' },
        { icon: SiRedis, label: 'Redis DB' },
        { icon: SiGit, label: 'Git Bash' },
        { icon: SiPnpm, label: 'PNPM' },
        { icon: SiClerk, label: 'Clerk Auth' }
    ];

    const cloudSkills = [
        { icon: SiGithub, label: 'Github' },
        { icon: SiVercel, label: 'Vercel' },
        { icon: SiRender, label: 'Render' },
        { icon: SiSupabase, label: 'Supabase' },
        { icon: SiMongodb, label: 'Mongo Atlas' }
    ];



    return (

        <Lenis root>

            <div className="h-svh w-full bg-gray-50 flex justify-center items-end">
                <PixelBlast
                    variant="square"
                    pixelSize={4}
                    color="#4A5565"
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
                        className={'font-akira font-bold text-2xl lg:text-9xl md:text-8xl sm:text-3xl'}
                    />
                    {width < 768 ? (<p className="w-fit flex items-center justify-center gap-1 h-10 px-4 rounded-full bg-slate-100/10 backdrop-blur-md font-clash font-medium text-sm text-center sm:text-xs tracking-wider">scroll down<ArrowDown className="size-4" /></p>) : (<p className='w-fit flex items-center justify-center gap-1 h-10 px-6 md:px-4 sm:px-2 rounded-full bg-slate-100/10 backdrop-blur-md font-clash font-medium text-lg text-center sm:text-xs tracking-wider'>I specialize in crafting full-stack MERN applications that turn ideas into reliable, intuitive, and goal-oriented web products.</p>)}
                </div>
            </div>

            <div className="flex h-svh w-full">
                <div className="min-h-svh w-svw bg-gray-50  gap-2 flex-col  flex p-5" >
                    <div className="flex flex-col gap-4 w-full h-full">
                        <div className="col-span-full row-span-2 sm:col-span-full sm:row-span-auto w-full bg-transparent grid place-content-center">
                            <BounceCards
                                containerWidth={width > 300 ? 100 : 300}
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
                                    <div className="absolute top-0 left-0 w-24 h-full pointer-events-none bg-gradient-to-r from-white to-transparent" />
                                    <div className="absolute top-0 right-0 w-24 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="sticky top-0 min-h-svh flex flex-col items-start justify-start bg-gray-100 px-8 py-3">
                    <div className="w-[200px] h-8 text-white bg-gray-900 my-2 text-2xl" />
                    <RevealText duration={1}>
                        <div className="lg:text-8xl md:text-5xl text-2xl font-akira text-left">I CREATE EXPERIENCES NOT JUST WEBSITES!</div>
                    </RevealText>
                </div>
                <div className="sticky top-0 min-h-svh flex gap-2 flex-col items-start justify-start bg-gray-200 px-8 py-3">
                    <div className="w-[200px] h-10 text-white bg-gray-900 my-2 ml-3 text-2xl" />
                    <div>
                        <div className="lg:text-8xl md:text-5xl text-2xl font-akira text-left">PROJECTS !</div>
                        <p className="font-clash text-sm md:text-xl text-left font-medium">These Projects that Realy Solves Problems.</p>
                    </div>
                    <div className="w-full h-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-4">
                        {
                            projects.map((itm, idx) => (
                                <div key={idx + 1} className="p-1 shadow-inner rounded-sm">
                                    <Lens>
                                        <img src={itm.img} className="rounded-sm" alt={itm.title} />
                                    </Lens>
                                    <div className="w-full flex justify-between items-center">
                                        <p className="font-clash font-semibold text-lg tracking-wider">{itm.title}</p>
                                        <p className="font-clash text-sm tracking-wider">{itm.label}</p>
                                    </div>
                                    <div className="w-full flex justify-between items-center">
                                        <div className="flex flex-col gap-1 self-start items-start justify-start">
                                            <p className="font-clash font-medium text-xs tracking-wider cursor-pointer hover:border-b-[1px] border-black" onClick={() => window.open(itm.url)}>{itm.alt}</p>
                                            <p className="font-clash font-medium text-xs tracking-wider">{itm.date}</p>
                                        </div>
                                        <div>
                                            <Button className="font-clash text-sm tracking-wider rounded-none" size={"icon"} onClick={() => window.open(itm.giturl)}><SiGithub /></Button>
                                            <Button className="font-clash text-sm tracking-wider rounded-none" onClick={() => window.open(`${itm.giturl}/issues`)}><ArrowUpRight />Issues</Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-2 flex-col items-start justify-start bg-gray-50 px-8 py-3">
                    <div className="w-[200px] h-8 text-white bg-gray-900 my-2 ml-6 text-2xl" />
                    <div>
                        <div className="text-2xl md:text-4xl lg:text-8xl font-akira text-left">CERTIFICATIONS</div>
                        <p className="font-clash text-xl text-left font-medium">I certtified in Skills that will be more helpful.</p>
                        <div className="w-full h-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 mt-4 gap-2">
                            {
                                initialAwards.map((c, i) => (
                                    <div key={i} className="rounded-sm p-1 shadow-inner w-full h-fit flex flex-col gap-2">
                                        <Lens>
                                            <img src={c.image} alt={c.title} loading="lazy" className="w-full object-cover rounded-sm" />
                                        </Lens>
                                        <div className="w-full text-gray-950">
                                            <p className="text-lg font-clash font-semibold">{c.title || "___"}</p>
                                            <div className="text-sm font-clash font-medium w-fit tracking-wide flex items-center cursor-pointer hover:border-b-[1px] border-black" onClick={() => window.open(c.url, "_blank")}>{c.institute}</div>
                                            <p className="text-xs font-medium font-clash tracking-wider">{c.date || "Certified in Skills that will be more helpful."}</p>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="h-auto flex gap-2 flex-col items-start justify-start bg-gray-50 px-8 py-3">
                    <div className="text-8xl font-akira text-left">SKILLS</div>
                    <p className="font-clash text-xl text-left font-medium">The Professional Skills that Helps Me to Develop Scalable Web Applications.</p>
                    <div className="w-full h-full grid grid-cols-3 grid-rows-1 mt-4 gap-2">
                        <div className="p-2 flex flex-col gap-2">
                            <p className="font-akira text-3xl">FRONTEND TECHNOLOGIES</p>

                            <div className="w-full grid grid-cols-2 grid-rows-4 gap-2">
                                {
                                    frontendSkills.map((s, i) => {
                                        const Icon = s.icon;
                                        return (
                                            <div className="w-full shadow-inner h-10 items-center gap-2 flex p-3" key={i}>
                                                <Icon className="text-gray-950 size-4" />
                                                <p className="text-sm font-clash font-medium">{s.label}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <p className="font-akira text-3xl">SECURITY TECHNIQUES</p>
                            <p className="font-clash font-medium text-sm">As a full stack javascript developer I not only focus on Backend also concentrate on security and scalability.</p>
                            <div className="w-full grid grid-cols-2 grid-rows-4 gap-2">
                                {
                                    securitySkills.map((s, i) => {

                                        return (
                                            <div className="w-full shadow-inner h-10 items-center gap-2 flex p-3" key={i}>
                                                <p className="text-sm font-clash font-medium">{s.label}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="p-2 flex flex-col gap-2">
                            <p className="font-akira text-3xl">BACKEND TECHNOLOGIES</p>
                            <div className="w-full grid grid-cols-2 grid-rows-4 gap-2">
                                {
                                    backendSkills.map((s, i) => {
                                        const Icon = s.icon;
                                        return (
                                            <div className="w-full shadow-inner h-10 items-center gap-2 flex p-3" key={i}>
                                                <Icon className="text-gray-950 size-4" />
                                                <p className="text-sm font-clash font-medium">{s.label}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="p-2 flex flex-col gap-2">
                            <p className="font-akira text-3xl">CLOUD TECHNOLOGIES</p>
                            <div className="w-full grid grid-cols-2 grid-rows-4 gap-2">
                                {
                                    cloudSkills.map((s, i) => {
                                        const Icon = s.icon;
                                        return (
                                            <div className="w-full shadow-inner h-10 items-center gap-2 flex p-3" key={i}>
                                                <Icon className="text-gray-950 size-4" />
                                                <p className="text-sm font-clash font-medium">{s.label}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </Lenis >
    );
}