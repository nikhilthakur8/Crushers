import React, { useState } from "react";
import Container from "../Container/Container";

export const FaceSearch = () => {
    const [image, faceImage] = useState(
        "https://cdna.artstation.com/p/assets/images/images/040/951/926/original/maddie_creates-jj-ver2.gif?1630351796"
    );

    function imagePreview(e) {
        faceImage(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="px-5 my-5 space-y-5 w-full md:w-2/3 mx-auto md:my-10 text-sm md:text-xl">
            <p className="bg-red-500 rounded-md my-4 text-white  px-2 py-2">
                ⚠️ This is in the testing phase (40% accuracy) and may produce
                incorrect results. ⚠️
            </p>

            <p className="w-full bg-blue-500 text-white  p-2 rounded-md">
                📏 Instruction : Please upload a close-up photo where the face
                is clearly visible. 📸
            </p>

            <div className="rounded-md w-80 mx-auto border border-black/55 overflow-hidden">
                <img src={image} className="w-80 h-60 object-fill" />
                <div>
                    <label
                        htmlFor="faceImage"
                        className="text-center w-full inline-block bg-blue-500 cursor-pointer hover:ring-offset-0 hover:ring-2 duration-200 hover:ring-blue-300 px-6 py-2 border-white text-white"
                    >
                        Upload Now
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={imagePreview}
                        name="faceImage"
                        className="hidden"
                        id="faceImage"
                    />
                </div>
            </div>
            <button
                type="button"
                className="text-center block w-60 mx-auto  bg-blue-500 cursor-pointer hover:ring-offset-0 hover:ring-2 duration-200 hover:ring-blue-300 px-6 py-2 border-white text-white rounded-md"
            >
                Search Now
            </button>
        </div>
    );
};
