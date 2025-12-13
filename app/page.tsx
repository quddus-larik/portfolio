"use client";

import { Lenis } from "lenis/react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SiClerk, SiCss3, SiDribbble, SiExpress, SiGit, SiGithub, SiHtml5, SiMongodb, SiMysql, SiNextdotjs, SiNextui, SiNodedotjs, SiNpm, SiPnpm, SiReact, SiRedis, SiRender, SiSass, SiShadcnui, SiSupabase, SiTailwindcss, SiVercel } from 'react-icons/si';
import { RevealText } from '@/components/custom/revealtext';
// Removed unused Spotlight
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from "lucide-react";
import { Lens } from "@/components/ui/lens";
import { useWindowSize } from "@/hooks";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AboutMe } from "@/components/web/about";
import { Start } from "@/components/web/home";
import { Projects } from "@/components/web/projects";
import { Quote } from "@/components/web/quote";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const { height, width } = useWindowSize();
    

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
        { label: 'CI/CD Pipelines' },
        { label: 'ACID Implementation' }
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
            <Start />
            <AboutMe images={images} transformStyles={transformStyles} />
            
        <div className="relative">
            <Quote />
            <Projects projects={projects} />
        </div>
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
                <div className="flex flex-col">
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
                <div className="border-t-2 w-full min-h-svh">
                    <div className="text-8xl font-akira text-left">CONTACT ME</div>
                    <p className="font-clash text-xl text-left font-medium">Inform Me if Want More Explaination About Me.</p>
                    <form className="w-full lg:w-1/2 flex flex-col gap-2 mt-3">
                        <Label>Name</Label>
                        <Input type="text" name="username"/>
                        <Label>Email</Label>
                        <Input type="email" name="email"/>
                        <Label>Message</Label>
                        <Textarea name="message"/>
                    </form>
                </div>
            </div>
        </Lenis >
    );
}