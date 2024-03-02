import { ArrowUpRight } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export const Hero = () => {
    const user = useSelector((state) => state.userData);
    return (
        <div
            className="py-4"
            style={{
                backgroundImage:
                    'url("https://t4.ftcdn.net/jpg/03/09/24/63/240_F_309246316_uXQOS2tcdUceurcmAJprpxBbbktiSW0C.jpg")',
                width: "100%",
                height: "auto",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="mx-5 my-5 sm:flex flex-col md:px-5">
                <div className="lg:text-2xl text-2xl flex font-serif font-medium text-gray-300">
                    <Typewriter
                        options={{
                            strings: ["Hello,", "नमस्ते,", "Hola,", "Bonjour,"],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 100,
                        }}
                    />
                </div>
                <p className="md:text-4xl text-3xl mt-1 font-serif font-bold  text-gray-200">
                    {user?.name} ...
                </p>
            </div>
        </div>
    );
};
