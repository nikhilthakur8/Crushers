/* eslint-disable react-hooks/exhaustive-deps */
import { CalendarRange, ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { getPhotoPreview, searchFriend } from "../../appwrite/config";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export const Search = () => {
    useEffect(() => {
        window.scrollTo(0, -200);
    }, []);
    const { register, handleSubmit, reset } = useForm();
    const [documents, setDocuments] = useState([]);
    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const [filteredNames, setFilteredNames] = useState([]);
    function onSubmit(data) {
        ref.current.continuousStart();
        setCurrentPage(1);
        setFilteredNames([]);
        console.log(data);
        const DOB = data.DOB.split("-").reverse().join("-");
        data.DOB = DOB;
        let number = data.phoneNo.replace(/\s+/g, "");
        number = number.startsWith("0") ? number.slice(1) : number;
        number = number.startsWith("+91") ? number.slice(3) : number;
        data.phoneNo = number;
        console.log(data);
        searchFriend(data)
            .then(async ({ documents, total }) => {
                scrollToTarget();
                const TotalPage = Math.ceil(total / 20);
                setTotalPage(TotalPage);
                setDocuments(documents);
                const doc = documents.slice(0, 20);
                doc.forEach(
                    (eachUser) =>
                        (eachUser["imgLink"] = getPhotoPreview(eachUser.image))
                );
                setUser(doc);
            })
            .finally(() => ref.current.complete());
    }
    const targetRef = useRef(null);
    const ref = useRef(null);
    // Function to scroll to the target element
    const scrollToTarget = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [searchName, setSearchName] = useState();
    function search(e) {
        const searchQuery = e.target.value;
        setSearchName(searchQuery);
        if (searchQuery) {
            const filteredNames = user.filter(({ fullName }) =>
                fullName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredNames(filteredNames);
        } else setFilteredNames([]);
    }
    function pagination() {
        const from = currentPage * 20;
        const to = from + 20;
        const users = documents.slice(from, to);
        users.forEach(
            (eachUser) =>
                (eachUser["imgLink"] = getPhotoPreview(eachUser.image))
        );
        setUser((prev) => [...prev, ...users]);
        setCurrentPage((prev) => prev + 1);
    }
    return (
        <div className="w-full sm:w-2/3 md:w-1/2 bg-gray-100 mx-auto p-5 sm:my-5 rounded-xl">
            <LoadingBar height={6} ref={ref} color="orange" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-3xl font-semibold font-serif text-blue-900 ">
                    Search your Friend
                </h1>
                <div className="mt-6 relative">
                    <label htmlFor="branch" className="text-lg font-semibold ">
                        Search By Branch
                    </label>
                    <select
                        name="branch"
                        id="branch"
                        className=" bg-white focus:outline-none w-full mt-1 py-2     px-5 appearance-none font-semibold rounded-md shadow-gray-300 shadow-xl"
                        defaultValue={""}
                        {...register("branch", {
                            required: false,
                            minLength: 1,
                        })}
                    >
                        <option value="" disabled></option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="ICE">ICE</option>
                    </select>
                    <ChevronDown className=" absolute top-10 right-5" />
                </div>
                <div className="mt-6 relative ">
                    <label className="text-lg font-semibold " htmlFor="phoneNo">
                        Search By Phone Number
                    </label>
                    <div className="flex rounded-md overflow-hidden  mt-1 shadow-gray-300 shadow-xl ">
                        <h1 className="bg-black px-4 py-2 text-white font-bold ">
                            +91
                        </h1>
                        <input
                            id="phoneNo"
                            type="tel"
                            className="w-full font-semibold py-2 px-4 focus:outline-none "
                            {...register("phoneNo")}
                        />
                    </div>
                </div>

                <div className="mt-6 relative">
                    <label className="text-lg font-semibold " htmlFor="DOB">
                        Search By DOB
                    </label>
                    <input
                        type="date"
                        id="DOB"
                        className="w-full py-2 px-5 rounded-md mt-1 appearance-none font-semibold bg-white focus:outline-none shadow-gray-300 shadow-xl"
                        {...register("DOB")}
                    />
                    <CalendarRange className="absolute top-11 right-5 inline bg-transparent sm:hidden " />
                </div>

                <div className="flex w-full justify-between mt-10">
                    <button
                        type="reset"
                        className="bg-blue-900 text-white py-2 px-10 font-semibold rounded-md hover:bg-blue-700 shadow-gray-400 shadow-xl "
                        onClick={() => {
                            setUser([]);
                            setDocuments([]);
                            setCurrentPage(1);
                            setTotalPage(1);
                            reset({
                                branch: "",
                                phoneNo: undefined,
                                DOB: "",
                            });
                        }}
                    >
                        Reset Now
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-900 text-white py-2 px-10 font-semibold rounded-md hover:bg-blue-700 shadow-gray-400 shadow-xl "
                    >
                        Search Now
                    </button>
                </div>
                <div className="bg-blue-200 my-10 px-5 py-5" ref={targetRef}>
                    <div className="w-full">
                        <label
                            htmlFor="fullName"
                            className="text-lg font-semibold text-blue-900"
                        >
                            Search By Name
                        </label>
                        <input
                            type="search"
                            id="fullName"
                            onChange={search}
                            className="w-full py-2 px-5 focus:outline-none mt-2 rounded-md text-lg transition-all duration-300 focus:scale-105"
                            placeholder="Search Name "
                        />
                        <ul className="mt-5">
                            {filteredNames.length == 0 && user.length == 0 && (
                                <div className="text-center text-xl font-semibold">
                                    No Result Found
                                </div>
                            )}
                            {(searchName ? filteredNames : user).map(
                                (eachUser, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="bg-blue-100 hover:scale-105 transition-all duration-300   py-3 pl-3 rounded-md font-semibold my-4"
                                        >
                                            <Link
                                                to={`/user/${eachUser.$id}`}
                                                className="flex items-center"
                                            >
                                                <div>
                                                    <img
                                                        src={eachUser.imgLink}
                                                        className="w-16 object-fill rounded-md border border-black"
                                                    />
                                                </div>
                                                <div className="flex flex-col w-full px-5 py-2 space-y-">
                                                    <p className="text-base">
                                                        {eachUser.fullName}
                                                    </p>
                                                    <div className="flex space-x-5 text-sm">
                                                        <p>{eachUser.branch}</p>
                                                        <p className="hidden sm:inline">
                                                            DOB: {eachUser.DOB}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                        {currentPage !== totalPage && totalPage !== 0 && (
                            <div className="flex justify-center mt-10 mb-5">
                                <button
                                    type="button"
                                    onClick={pagination}
                                    className=" text-blue-700 font-sans font-semibold border-transparent px-2  border-b-2 hover:border-black transition-all duration-300"
                                >
                                    View More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};
