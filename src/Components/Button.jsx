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
      className="w-full  flex items-center justify-center bg-blue-500 px-10 py-2 my-2 text-base md:text-lg font-semibold text-white hover:bg-blue-500/70"
      {...props}
    >
      {loading ? <ClipLoader /> : text}
      {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
    </button>
  );
}
