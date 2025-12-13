import Shuffle from "@/components/Shuffle";
import PixelBlast from "@/components/PixelBlast";
import { useWindowSize } from "@/hooks";
import { ArrowDown } from "lucide-react";

export function Home() {

    const { width } = useWindowSize();

    return (
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
    )
}