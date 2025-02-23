/* eslint-disable react/prop-types */

import { ExternalLink } from "lucide-react";

function Para({ text, output }) {
    return (
        <div className=" flex text-base justify-between md:text-xl lg:text-2xl my-2">
            <div className="flex flex-row">
                <p className=" text-slate-500 inline font-medium  mr-2 ">
                    {text}
                </p>
                <p className=" text-gray-100 inline ">{output}</p>
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
