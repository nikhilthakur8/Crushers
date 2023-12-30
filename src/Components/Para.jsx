/* eslint-disable react/prop-types */

import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

function Para({ text, output }) {
  return (
    <div className="w-full px-6 md:w-[95%] flex justify-between text-base md:text-xl lg:text-2xl my-2">
      <div className="inline-flex flex-row">
        <p className=" text-gray-900 inline font-medium  mr-2 ">{text}</p>
        <p className=" text-gray-200 inline ">{output}</p>
      </div>
      {text === "Address:" && (
        <a target="_blank"
          className="m-0 p-0"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            output
          )}`} rel="noreferrer"
        >
          <ExternalLink className="w-10 h-7 rounded-md text-blue-500 bg-white p-0.5 active:text-white active:bg-black font-semibold" />
        </a>
      )}

      {text === "Phone No. " && (
        <a className="m-0 justify-self-end p-0" target="_blank" href={`tel:+91${output}`} rel="noreferrer">
          <ExternalLink className="w-10 h-7  rounded-md text-blue-500 bg-white p-0.5 active:text-white active:bg-black font-semibold" />
        </a>
      )}
    </div>
  );
}

export default Para;
