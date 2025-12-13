import { RevealText } from "../custom/revealtext";


export function Quote() {

    return (
        <div className="sticky top-0 min-h-svh flex flex-col items-start justify-start bg-gray-100 px-8 py-3">
            <div className="w-[200px] h-8 bg-gray-900 my-2" />
            <RevealText duration={1}>
                <div className="lg:text-8xl md:text-5xl text-2xl font-akira">
                    I CREATE EXPERIENCES NOT JUST WEBSITES!
                </div>
            </RevealText>
        </div>
    )
}