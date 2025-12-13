import { ButtonHTMLAttributes } from "react";


type ButtonTypeProps = {
    defaultText?: string;
    animatedText?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">

export function SplitButton({ defaultText, animatedText, ...props }: ButtonTypeProps) {

    return (
        <button {...props} className="group relative py-2 rounded-none border px-3 font-clash text-white bg-black w-auto">
            <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">{defaultText}</div>
                <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">{animatedText ? animatedText : defaultText}</div>
            </span>
        </button>
    )
}