/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Para from "../Para";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getUserById, updateTheSeenBy } from "../../appwrite/config";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
import { RWebShare } from "react-web-share";
import { Share2, Unlock } from "lucide-react";
import { TrailingIconButtons } from "../Button";
import { UnlockMessage } from "./UnlockMessage";
import { BackgroundGradient } from "../ui/background-gradient";
function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const { userId } = useParams();
    const [pageLoading, setPageLoading] = useState(true);
    const requestingUser = useSelector((state) => state.userData);
    useEffect(() => {
        window.scrollTo(0, -200);
        setPageLoading(true);
        getUserById(userId)
            .then((userData) => {
                document.title = `${userData.fullName} - Crushers`;
                if (
                    userData.AccessedBy.includes(requestingUser) ||
                    requestingUser
                ) {
                    setUser(userData);
                    if (!requestingUser.labels.includes("admin"))
                        updateTheSeenBy(requestingUser, userId, userData);
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
    return pageLoading ? (
        <>
            <div className="min-h-[80vh] flex justify-center">
                <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsNzXnQ3DZVtU8RteFSaX9-UAvwErM_fk_DPPRjWDufrHpQ7wp"
                    alt=""
                    className="my-auto opacity-60  rounded-full"
                />
            </div>
        </>
    ) : (
        <div className="bg-slate-900 ">
            {!user?.Address && <UnlockMessage />}
            <div className="mx-4 sm:max-w-sm xl:max-w-2xl min-h-[70vh] sm:mx-auto px-auto py-12 bg-grid-white/[0.02]">
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
                        <div
                            className=" lg:w-44 md:w-44 md:h-auto lg:h-auto w-28 h-28  mx-auto my-5  md:rounded-xl flex justify-center items-center"
                        >
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

                        <div className="w-full mx-auto sm:my-6">
                            <Para text={"Name:"} output={user?.fullName} />
                            <Para text={"Branch:"} output={user?.branch} />
                            <Para text={"Roll No. "} output={user?.rollNo} />
                            <Para text={"DOB :"} output={user?.DOB} />
                            <Para
                                text={"Blood Group:"}
                                output={user?.bloodGroup}
                            />
                            <Para
                                text={"Phone No. "}
                                output={user?.mobileNumber}
                            />
                            <Para text={"Address:"} output={user?.Address} />
                            <Para text={"Date:"} output={user?.date} />
                            <Para text={"Time :"} output={user?.time} />
                        </div>
                    </div>
                    <div className=" bg-slate-900 border-t-[0.1px] border-slate-500 p-2 text-base md:text-xl lg:text-2xl  text-white text-center rounded-b-[25px]">
                        Total Views : {user?.seenBy?.length || "XX"}
                    </div>
                </BackgroundGradient>
                {requestingUser.labels.includes("admin") && user && (
                    <Link
                        to={`/admin/user/analytics/${user?.$id}`}
                        className="block w-56 mx-auto mt-10 font-semibold rounded-md"
                    >
                        <TrailingIconButtons text="View Analytics"></TrailingIconButtons>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default User;
