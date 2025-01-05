import { ArrowUpRight } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export const Hero = () => {
    const user = useSelector((state) => state.userData);

    const words = [
        {
            text: "Hello,",
        },
        {
            text: user?.name,
            className :"text-indigo-500"
        },
    ];
    return (
        <div className="md:py-4">
            <div className=" flex text-gray-300">
                <TypewriterEffectSmooth words={words} />
            </div>
        </div>
    );
};
