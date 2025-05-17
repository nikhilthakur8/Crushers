/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Para from "../Para";
import { Link, useParams } from "react-router-dom";
import {
    getUserById,
    updateTheSeenBy,
    updateUserEmail,
} from "../../appwrite/config";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
import { RWebShare } from "react-web-share";
import { Share2 } from "lucide-react";
import { TrailingIconButtons } from "../Button";
import { BackgroundGradient } from "../ui/background-gradient";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { AdditionalInfo } from "./AdditionalInfo";
import { getUserByName } from "../../appwrite/config.addtional.js";
import { IconSquareToggleHorizontal } from "@tabler/icons-react";
import axios from "axios";

function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const { userId } = useParams();
    const [pageLoading, setPageLoading] = useState(true);
    const [error, setError] = useState(null);
    const [emailLoading, setEmailLoading] = useState(false);
    const [additionalUserData, setAdditionalUserData] = useState(null);
    const requestingUser = useSelector((state) => state.userData);
    useEffect(() => {
        const userDetails = [
            "fullName",
            "email",
            "mobileNumber",
            "rollNo",
            "branch",
            "bloodGroup",
            "image",
            "DOB",
            "totalViews",
        ];
        window.scrollTo(0, -200);
        setPageLoading(true);
        if (
            requestingUser.labels.includes("admin") ||
            requestingUser.labels.includes("user")
        )
            userDetails.push("Address");
        if (requestingUser.labels.includes("admin")) userDetails.push("seenBy");
        getUserById(userId, userDetails)
            .then((userData) => {
                document.title = `${userData.fullName} - Crushers`;
                if (requestingUser) {
                    setUser(userData);
                    getUserByName(userData?.fullName).then((data) => {
                        setAdditionalUserData(data);
                    });
                    const { totalViews } = userData;
                    if (!requestingUser.labels.includes("admin"))
                        updateTheSeenBy(
                            requestingUser,
                            userId,
                            totalViews,
                            userData
                        );
                } else {
                    const profile = {
                        $id: userData.$id,
                        imgLink: userData.imgLink,
                    };
                    setUser(profile);
                }
            })
            .finally(() => setPageLoading(false));
    }, [userId]);
    const handleEmailFetch = () => {
        setEmailLoading(true);
        return new Promise((resolve, reject) => {
            axios
                .get(`https://6828e63a34cc2d8778aa.fra.appwrite.run/`, {
                    params: {
                        mobileNumber: user?.mobileNumber,
                    },
                })
                .then(async ({ data }) => {
                    const { email } = data;
                    if (email) {
                        setUser((user) => {
                            return { ...user, email };
                        });
                        await updateUserEmail(email, userId);
                        resolve(email);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setError(err.message);
                    reject(err);
                })
                .finally(() => {
                    setEmailLoading(false);
                });
        });
    };

    const handleToast = () => {
        toast.promise(handleEmailFetch(), {
            pending: "Finding (might take a few minutes)",
            success: `Email ID Found`,
            error: error || "Something went wrong",
        });
    };
    return pageLoading ? (
        <>
            <div className="min-h-[80vh] flex bg-slate-700 justify-center">
                <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsNzXnQ3DZVtU8RteFSaX9-UAvwErM_fk_DPPRjWDufrHpQ7wp"
                    alt=""
                    className="my-auto opacity-60  rounded-full"
                />
            </div>
        </>
    ) : (
        <div className="bg-slate-900 ">
            {/* {!user?.Address && <UnlockMessage />} */}
            <div className="mx-4 sm:max-w-xl xl:max-w-2xl min-h-[70vh] sm:mx-auto px-auto py-12 bg-grid-white/[0.02] space-y-5">
                <ToastContainer
                    className={"md:mt-28 mt-24 px-2"}
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
                <div>
                    <BackgroundGradient className="rounded-[22px]  bg-white dark:bg-zinc-900">
                        <div className="md:px-1 flex bg-slate-900  flex-col  relative rounded-t-[25px]">
                            <div className="self-end absolute top-5 right-5">
                                <RWebShare
                                    data={{
                                        text: `Take a look at the profile of ${user?.fullName}!`,
                                        url: `/user/${user?.$id}`,
                                        title: "Share profile with friends",
                                    }}
                                >
                                    <Share2 className="w-10 cursor-pointer h-7 md:w-12 md:h-10 rounded-md shadow-lg bg-cyan-900 text-gray-300 p-1 active:text-white active:bg-slate-700 font-semibold" />
                                </RWebShare>
                            </div>
                            <div className=" lg:w-44 md:w-44 md:h-auto lg:h-auto w-28 h-28  mx-auto my-5  md:rounded-xl flex justify-center items-center">
                                <img
                                    src={user?.imgLink}
                                    className={`rounded-md  h-full w-full  shadow-lg ${
                                        loading && "hidden"
                                    } `}
                                    onLoad={() => setLoading(false)}
                                />
                                <div className={`  ${!loading && "hidden"}`}>
                                    <ClipLoader loading={loading} size={70} />
                                </div>
                            </div>

                            <div className="w-full mx-auto sm:my-6 my-3 px-6">
                                <Para text={"Name:"} output={user?.fullName} />
                                <Para text={"Branch:"} output={user?.branch} />
                                <Para
                                    text={"Roll No. "}
                                    output={user?.rollNo}
                                />
                                <Para text={"DOB :"} output={user?.DOB} />
                                <Para
                                    text={"Blood Group:"}
                                    output={user?.bloodGroup}
                                />
                                <Para
                                    text={"Phone No. "}
                                    output={user?.mobileNumber}
                                />
                                <Para
                                    text={"Address:"}
                                    output={
                                        user?.Address || (
                                            <span className="text-red-700 text-md font-semibold">
                                                ** Access Not Available
                                            </span>
                                        )
                                    }
                                />
                                {/* <Para text={"Date:"} output={user?.date} /> */}
                                {/* <Para text={"Time :"} output={user?.time} /> */}
                                <div className="flex">
                                    <Para
                                        text={"Email Id :"}
                                        output={user?.email}
                                    />
                                    {user?.email == null && (
                                        <button className="md:w-56 mx-2 text-sm md:text-base">
                                            <TrailingIconButtons
                                                loading={emailLoading}
                                                onClick={handleToast}
                                                text={"Get Email Id"}
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className=" bg-slate-900 border-t-[0.1px] border-slate-500 p-2 text-base md:text-xl lg:text-2xl  text-white text-center rounded-b-[25px]">
                            Total Views : {user?.totalViews || "XX"}
                        </div>
                    </BackgroundGradient>
                </div>
                {additionalUserData?.length && (
                    <div className="text-gray-50 px-4 font-mono">
                        **Below Data May be Incorrect:{" "}
                    </div>
                )}
                <div>
                    {additionalUserData && additionalUserData.length > 0 && (
                        <div className="space-y-5">
                            {additionalUserData.map((info, index) => (
                                <BackgroundGradient
                                    className="rounded-[22px] bg-white dark:bg-zinc-900"
                                    key={index}
                                >
                                    <AdditionalInfo additionalUserData={info} />
                                </BackgroundGradient>
                            ))}
                        </div>
                    )}
                </div>
                {requestingUser.labels.includes("admin") && user && (
                    <Link
                        to={`/admin/user/analytics/${user?.$id}`}
                        className="block w-56 mt-10 mx-auto font-semibold rounded-md"
                    >
                        <TrailingIconButtons text="View Analytics"></TrailingIconButtons>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default User;
