// configs.ts

import { 
    Instagram, 
    Linkedin, 
    Twitter, 
    Github, 
    MailIcon 
} from "lucide-react"

export type LucideIcon = React.FC<React.SVGProps<SVGSVGElement>>;

interface ObjectUrls {
    title: string,
    username?: string,
    link: string,
    icon: LucideIcon
}

export interface ObjectConstant {
    sitename: string,
    username: string,
    socialurls: ObjectUrls[]
}

export function Configs(): ObjectConstant {
    const SETTINGS: ObjectConstant = {
        sitename: "Nitroxee",
        username: "@" + "QUDDUS".toLowerCase(),
        socialurls: [
            {
                title: "Instagram",
                username: "@unreal.quddus",
                link: `https://www.instagram.com/unreal.quddus`,
                icon: Instagram
            },
            {
                title: "LinkedIn",
                username: "@quddus",
                link: `https://www.linkedin.com/in/quddus`,
                icon: Linkedin
            },
            {
                title: "X (Twitter)",
                username: "@nitroxee",
                link: `https://x.com/nitroxee`,
                icon: Twitter
            },
            {
                title: "GitHub",
                username: "Quddus",
                link: `https://github.com/Quddus`,
                icon: Github
            },
            {
                title: "Email",
                username: "hi@nitroxee.dev",
                link: `mailto:hi@nitroxee.dev`,
                icon: MailIcon
            },
        ]
    }

    return SETTINGS;
}