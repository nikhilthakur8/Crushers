/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Para from "../Para";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getUserById, updateTheSeenBy } from "../../appwrite/config";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
import { RWebShare } from "react-web-share";
import { Share2 } from "lucide-react";
import { TrailingIconButtons } from "../Button";
export const userCardLoader = async ({ params }) => {
    const res = await getUserById(params.userId);
    return res;
};
function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const userData = useLoaderData();
    const { userId } = useParams();
    const requestingUser = useSelector((state) => state.userData);
    useEffect(() => {
        setUser(userData);
        document.title = `${userData.fullName} - Crushers`;
        updateTheSeenBy(requestingUser, userId, userData);
        window.scrollTo(0, -200);
    }, [userData]);
    return (
        <>
            <div className="shadow-xl shadow-black  md:w-/6  mx-auto px-auto w-[90%] md:min-h-[70vh]  md:px-1 mt-6  py-5  rounded-t-lg bg-purple-700/90 md:rounded-t-3xl flex  flex-col relative md:flex-row">
                <div className="self-end absolute top-5 right-5">
                    <RWebShare
                        data={{
                            text: `Take a look at the profile of ${user.fullName}!`,
                            url: `/user/${user.$id}`,
                            title: "Share profile with friends",
                        }}
                    >
                        <Share2 className="w-10 cursor-pointer h-7 md:w-12 md:h-10 rounded-md shadow-lg bg-indigo-700 text-gray-300 p-1 active:text-white active:bg-black font-semibold" />
                    </RWebShare>
                </div>
                <div
                    className="md:shadow-lg lg:min-w-80 md:w-72 md:h-auto lg:min-h-80 w-28 h-28  mx-auto  md:my-auto my-5 md:p-10 lg:ml-20 md:ml-10 md:bg-gray-300 md:rounded-xl  md:shadow-black
        flex justify-center items-center"
                >
                    <img
                        src={user.imgLink}
                        className={`rounded-md border h-full w-full border-black shadow-lg ${
                            loading && "hidden"
                        } `}
                        onLoad={() => setLoading(false)}
                    />
                    <div className={`  ${!loading && "hidden"}`}>
                        <ClipLoader loading={loading} size={70} />
                    </div>
                </div>

                <div className="w-full md:w-2/3 my-auto">
                    <Para text={"Name:"} output={user.fullName} />
                    <Para text={"Branch:"} output={user.branch} />
                    <Para text={"Roll No. "} output={user.rollNo} />
                    <Para text={"DOB :"} output={user.DOB} />
                    <Para text={"Blood Group:"} output={user.bloodGroup} />
                    <Para text={"Phone No. "} output={user.mobileNumber} />
                    <Para text={"Address:"} output={user.Address} />
                    <Para text={"Date:"} output={user.date} />
                    <Para text={"Time :"} output={user.time} />
                </div>
            </div>
            <div className="w-[90%] bg-slate-900 mb-8 relative p-2 text-base md:text-xl lg:text-2xl rounded-b-lg text-white md:rounded-b-3xl text-center mx-auto ">
                Total Views : {userData.seenBy.length}
            </div>
            {requestingUser.labels.includes("admin") && (
                <Link
                    to={`/admin/user/analytics/${userData.$id}`}
                    className="block w-56 mx-auto mb-6 rounded-md"
                >
                    <TrailingIconButtons text="View Analytics"></TrailingIconButtons>
                </Link>
            )}
        </>
    );
}

export default User;
