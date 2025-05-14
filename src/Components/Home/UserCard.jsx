import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

/* eslint-disable react/prop-types */
function UserCard({ user }) {
    const [loading, setLoading] = useState(true);
    console.log(user);
    return (
        <Link to={`/user/${user.$id}`} className="relative">
            <div className="absolute hidden md:block inset-0 h-full  bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-2xl md:blur-3xl " />
            <div className="relative bg-gray-900 bg-grid-white/[0.02] text-white shadow-md border border-slate-700 rounded-xl overflow-hidden">
                <div className="mx-4 mt-4 flex justify-center items-center text-gray-700  rounded-xl md:h-60 h-32">
                    <img
                        className={`md:w-40 w-24 rounded-md overflow-hidden ${
                            loading && "hidden"
                        }`}
                        src={user.imgLink}
                        alt="profile-picture"
                        onLoad={() => setLoading(false)}
                    />
                    <div
                        className={`w-full h-full flex justify-center items-center ${
                            !loading && "hidden"
                        }`}
                    >
                        <ClipLoader color="white" size={40} />
                    </div>
                </div>
                <div className="md:p-6 p-3 border-t border-slate-700 text-center text-neutral-300 w-full">
                    <h4 className="block text-md mb-1 md:mb-2 text-neutral-200 font-sans md:text-2xl font-bold">
                        {user.fullName}
                    </h4>
                    <p className="font-sans text-sm md:text-base antialiased font-medium ">
                        {user.branch}
                    </p>
                    <p className="font-sans text-base font-medium md:block hidden">
                        DOB: {user.DOB}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default UserCard;
