/* eslint-disable react/prop-types */
import { ArrowRight, ImageDown } from "lucide-react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated } from "../../Jwt/isAuthenticated";
import { Meteors } from "../ui/meteors";
function Profile() {
    const [imgLink, setImageLink] = useState(
        "https://cdn-icons-png.flaticon.com/512/219/219970.png"
    );
    const filePreview = (file) => {
        setImageLink(URL.createObjectURL(file));
    };
    const userData = isAuthenticated();
    document.title = `Profile - Crushers`;
    return (
        <Container className={"bg-black/[0.96]"}>
            <div className="relative max-w-2xl  mx-4 lg:max-w-sm xl:max-w-2xl sm:mx-auto">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative overflow-hidden my-14 py-5 border-[0.5px] font-sans border-slate-400 text-slate-300 rounded-lg bg-gray-900 ">
                    <div className="mx-auto  w-28 h-28 border-[1px] border-slate-700 relative group rounded-full overflow-hidden">
                        <img
                            className="h-34 w-34 rounded-full object-cover"
                            src={imgLink}
                            alt="none"
                        />
                        <div className="w-full h-full absolute top-0 flex justify-center items-center group-hover:bg-black/25 group-hover:cursor-pointer">
                            <label
                                htmlFor="image-input"
                                className="group-hover:cursor-pointer w-full h-full flex justify-center items-center"
                            >
                                <ImageDown
                                    className="text-white  group-hover:block hidden active:text-white/60 relative z-10"
                                    size={37}
                                />
                            </label>
                            <input
                                accept="image/*"
                                type="file"
                                name="profileImg"
                                id="image-input"
                                className="hidden"
                                onChange={(e) => filePreview(e.target.files[0])}
                            />
                        </div>
                    </div>

                    <div className="text-center mt-5 mx-4">
                        <form className="space-y-2">
                            <h1 className="">
                                <p className="text-slate-500 inline">Name: </p>
                                <p className="inline font-bold">
                                    {userData?.name}
                                </p>
                            </h1>

                            <p className="">
                                <p className="text-slate-500 inline">
                                    User Id:{" "}
                                </p>
                                <p className="inline font-bold">
                                    {userData?.$id}
                                </p>
                            </p>
                            <p className="break-words">
                                <p className="text-slate-500  inline">
                                    Email:{" "}
                                </p>
                                <p className="inline font-bold">
                                    {userData?.email}
                                </p>
                            </p>
                        </form>
                    </div>
                    <Link to="/logout">
                        <button className=" max-w-sm mx-auto  flex items-center justify-center bg-black px-10 py-2 mt-5 text-base md:text-lg font-semibold group text-white  hover:text-xl hover:bg-black/80 rounded-lg ">
                            Logout
                            <ArrowRight className="group-hover:translate-x-1 group-hover:size-5 ml-2 h-4 w-4" />
                        </button>
                    </Link>
                    <Meteors number={20} />
                </div>
            </div>
        </Container>
    );
}

export default Profile;
