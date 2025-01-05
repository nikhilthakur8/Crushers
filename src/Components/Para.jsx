/* eslint-disable react/prop-types */

import { ExternalLink, Lock } from "lucide-react";

function Para({ text, output }) {
    return (
        <div className="w-full px-6 md:w-[95%]  flex justify-between text-base md:text-xl lg:text-2xl my-2">
            <div className="flex flex-row w-full">
                <p className=" text-slate-500 inline font-medium  mr-2 ">
                    {text}
                </p>
                {output ? (
                    <p className=" text-gray-100 inline ">{output}</p>
                ) : (
                    <div className="bg-gray-200/50 rounded flex-1 text-center mr-5 ">
                        <Lock
                            className="inline my-0.5"
                            strokeWidth={1.5}
                            height={20}
                        />
                    </div>
                )}
            </div>
            {text === "Address:" && output && (
                <a
                    target="_blank"
                    className="m-1 p-0 "
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        output
                    )}`}
                    rel="noreferrer"
                >
                    <ExternalLink className="w-10 h-7 md:w-12 md:h-10 rounded-md bg-cyan-900 text-gray-300 p-1  shadow-lg active:text-white active:bg-slate-900 font-semibold" />
                </a>
            )}

            {text === "Phone No. " && output && (
                <a
                    className="m-1 justify-self-end p-0"
                    target="_blank"
                    href={`tel:${output}`}
                    rel="noreferrer"
                >
                    <ExternalLink className="w-10 h-7 md:w-12 md:h-10  rounded-md bg-cyan-900 text-gray-300 p-1  shadow-lg active:text-white active:bg-slate-900 font-semibold" />
                </a>
            )}
        </div>
    );
}

export default Para;
