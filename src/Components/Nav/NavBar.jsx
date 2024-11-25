import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import UserCard from "../UserCard";
import { searchUserByKeyword } from "../../appwrite/config";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Profile",
        href: "/profile",
    },
    {
        name: "About",
        href: "/about",
    },
];
const menuForUnknown = [
    {
        name: "Login",
        href: "/login",
    },
    {
        name: "SignUp",
        href: "/Signup",
    },
    {
        name: "About",
        href: "/about",
    },
];
export default function ExampleNavbarFour() {
    const [loading, setLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [items, setItems] = useState([]);
    const [inputUser, setInputUser] = useState("");
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const userData = useSelector((state) => state.userData);
    useEffect(() => {
        if (inputUser.length > 0) {
            setLoading(true);
            searchUserByKeyword(inputUser).then((res) => {
                setItems(res);
                setLoading(false);
            });
        } else {
            setTimeout(() => {
                setItems([]);
            }, 1000);
        }
    }, [inputUser]);
    return (
        <div className="w-full py-2 min-h-[10vh] sticky top-0  z-20 bg-black ">
            <div className="mx-auto flex max-w-7xl items-center   justify-between px-4 py-3 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2 ">
                    <span>
                        <img
                            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsNzXnQ3DZVtU8RteFSaX9-UAvwErM_fk_DPPRjWDufrHpQ7wp"
                            className="m-0  p-0 md:w-16 md:h-16 w-12 rounded-lg h-12"
                            height={50}
                            width={50}
                            alt=""
                        />
                    </span>
                </div>
                <div className="hidden grow lg:block">
                    <ul className="ml-12 inline-flex space-x-8">
                        {(userData ? menuItems : menuForUnknown).map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="inline-flex items-center text-lg font-semibold text-white hover:text-white-900"
                                >
                                    {item.name}
                                    <span>
                                        <ChevronDown className="ml-2 h-4 w-4 text-white " />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {userData ? (
                    <div className="flex relative grow md:justify-end justify-center">
                        <input
                            className="flex h-10 md:w-[400px] w-[250px] rounded-md bg-gray-200 px-3 py-2 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-white/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-lg"
                            type="text"
                            placeholder="Search"
                            onChange={(e) => {
                                setTimeout(() => {
                                    setInputUser(e.target.value);
                                }, 2000);
                            }}
                        />
                        <div
                            onClick={() => {
                                setItems([]);
                            }}
                            className="absolute z-10 shadow-lg shadow-black top-12 no-scrollbar max-h-[40vh] overflow-auto cursor-pointer  rounded-xl "
                        >
                            {loading ? (
                                <div className="overflow-hidden flex justify-center md:w-[400px] w-[250px] h-12 items-center bg-gray-300 font-bolder ">
                                    <ClipLoader />
                                </div>
                            ) : (
                                items &&
                                items.length >= 0 &&
                                items.map((eachitems) => (
                                    <UserCard
                                        key={eachitems.$id}
                                        result={eachitems}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                ) : null}
                <Link to="/profile">
                    <div className="md:ml-14 mt-2 hidden lg:block ">
                        <span className="relative inline-block ">
                            <img
                                className="h-12 w-12 rounded-full hover:border-2 active:border-green-500"
                                src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                                alt="none"
                            />
                        </span>
                    </div>
                </Link>
                <div className=" lg:hidden text-white">
                    <Menu
                        onClick={toggleMenu}
                        className="h-7 mx-2 w-7 cursor-pointer"
                    />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-white ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <img
                                                className="m-0 p-0 w-14 h-14"
                                                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsNzXnQ3DZVtU8RteFSaX9-UAvwErM_fk_DPPRjWDufrHpQ7wp"
                                                alt=""
                                            />
                                        </span>
                                        <span className="font-bold text-white">
                                            Crushers
                                        </span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex  items-center justify-center rounded-md p-2  hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-white"
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <X
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {(userData
                                            ? menuItems
                                            : menuForUnknown
                                        ).map((item) => (
                                            <Link
                                                onClick={toggleMenu}
                                                key={item.name}
                                                to={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm text-white font-semibold hover:bg-gray-500 active:bg-gray-500"
                                            >
                                                <span className="ml-3 text-base font-medium text-white">
                                                    {item.name}
                                                </span>
                                                <span>
                                                    <ChevronRight className=" text-white ml-3 h-4 w-4" />
                                                </span>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                <div className="ml-3 mt-4 flex items-center space-x-2">
                                        <img
                                            className="inline-block border-2 border-white active:border-green-600 h-10 w-10 rounded-full"
                                            src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                                            alt="Loading..."
                                        />
                                    <span className="flex flex-col">
                                        <span className="text-base font-medium text-white">
                                            {userData?.name}
                                        </span>
                                        <span className="text-sm font-medium text-white">
                                            {userData?.$id}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
