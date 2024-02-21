import { Unlock } from "lucide-react";
import React from "react";

export const UnlockMessage = () => {
    return (
        <div className="bg-blue-800 w-[90%] mt-5 mx-auto rounded-md shadow-md shadow-black py-5">
            <div className="  text-white text-center font-bold font-serif text-xl  py-2">
                UnLock This Profile at &#x20b9;{"  "}
                <p className="text-yellow-400 text-2xl inline">69</p>
            </div>
            <button
                type="button"
                className="mx-auto flex rounded-md hover:scale-95 hover:bg-gray-800 transition-all duration-200 bg-black  items-center py-2 px-4 text-white text-xl font-semibold "
            >
                UnLock Now
                <Unlock className="inline text-white ml-3 " size={20} />
            </button>
        </div>
    );
};
