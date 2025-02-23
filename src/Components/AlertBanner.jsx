/* eslint-disable react/prop-types */
import { AlertTriangle, X } from "lucide-react";
import {  useState } from "react";

export function AlertBanner({ message ="something went wrong" }) {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div
        className={`rounded-md ${
          !toggle && "hidden"
        } absolute border-l-4  border-red-500 z-50 bg-red-100 p-4 top-3 mx-4 md:top-5`}
      >
        <div className="flex items-center justify-between space-x-4">
          <div>
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm md:text-md font-medium text-red-600">
              {message}
            </p>
          </div>
          <div onClick={() => setToggle(false)}>
            <X className="h-6 w-6 cursor-pointer text-red-600" />
          </div>
        </div>
      </div>
    </>
  );
}
