/* eslint-disable react/prop-types */
// import { ArrowRight } from "lucide-react";

import { ClipLoader } from "react-spinners";

export function TrailingIconButtons({
    type = "button",
    text,
    loading = false,
    ...props
}) {
    return (
        <button
            type={type}
            className={`w-full min-w-36 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3]  rounded-md text-white font-light transition duration-200 ease-linear`}
            {...props}
            disabled={loading}
        >
            {loading ? <ClipLoader size={20} /> : text}
        </button>
    );
}
