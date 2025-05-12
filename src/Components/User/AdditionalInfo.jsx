import { useEffect, useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Para from "../Para";

export const AdditionalInfo = ({ additionalUserData }) => {
    return (
        <div className="flex bg-slate-900  flex-col  relative rounded-[25px] py-6">
            <div className="mx-auto my-5  md:rounded-xl  space-x-5 flex items-center justify-center">
                {additionalUserData?.ipuImage && (
                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={additionalUserData?.ipuImage}
                            className={`rounded-md  lg:w-44 md:w-44 md:h-44 lg:h-44 w-28 h-28   shadow-lg `}
                        />
                        <p className="text-slate-50 whitespace-nowrap">
                            Admit Card Image
                        </p>
                    </div>
                )}
                {additionalUserData?.googleProfilePic && (
                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={additionalUserData?.googleProfilePic}
                            className={`rounded-md  lg:w-44 md:w-44 md:h-44 lg:h-44 w-28 h-28  shadow-lg `}
                        />
                        <p className="text-slate-50 whitespace-nowrap">
                            Google Profile Pic
                        </p>
                    </div>
                )}
            </div>
            <div className="w-full mx-auto  my-3 px-6">
                <Para text={"Additional Info"} />
                <Para text={"Name :"} output={additionalUserData?.name} />
                <Para text={"Email :"} output={additionalUserData?.email} />
                <Para
                    text={"Enrolment No :"}
                    output={additionalUserData?.enrolmentNo}
                />
                <Para text={"Branch :"} output={additionalUserData?.branch} />
                <Para
                    text={"Specialization :"}
                    output={additionalUserData?.specialization}
                />
                <Para
                    text={"Github Username :"}
                    output={additionalUserData?.githubUsername || "N/A"}
                />
                <Para
                    text={"Github Link :"}
                    url={`https://github.com/${additionalUserData?.githubUsername}`}
                    output={additionalUserData?.githubUsername ? "Link" : "N/A"}
                />
                <Para
                    text={"Leetcode Link :"}
                    url={`https://leetcode.com/${additionalUserData?.leetcodeUsername}`}
                    output={
                        additionalUserData?.leetcodeUsername ? "Link" : "N/A"
                    }
                />
                <Para text={"CGPA :"} output={additionalUserData?.cgpa} />
                <Para
                    text={"LinkedIn URL :"}
                    url={additionalUserData?.linkedInURL}
                    output={additionalUserData?.linkedInURL ? "Link" : "N/A"}
                />
                <Para text={"Gaia ID :"} output={additionalUserData?.gaiaId} />
                <Para
                    text={"Google Profile Pic :"}
                    url={additionalUserData?.googleProfilePic}
                    output={
                        additionalUserData?.googleProfilePic ? "Link" : "N/A"
                    }
                />
            </div>
        </div>
    );
};
