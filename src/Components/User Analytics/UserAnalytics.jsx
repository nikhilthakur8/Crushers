/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../appwrite/config";
import { useSelector } from "react-redux";

function UserAnalytics() {
    const { userId } = useParams();
    const [user, setUser] = useState([]);
    const userData = useSelector((state) => state.userData);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.labels.includes("admin")) navigate(-1);
        else {
            getUserById(userId, ["seenBy"]).then((userData) => {
                setUser(userData);
            });
        }
    }, [userId]);
    return (
        <div className="w-[95%] mx-auto my-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-black">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-gray-700 uppercase dark:text-gray-100 border-black border-b-2">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                            >
                                Email Id
                            </th>
                            <th scope="col" className="px-6 py-3 bg-blue-900">
                                Time
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                            >
                                User Id
                            </th>
                            <th scope="col" className="px-6 py-3 bg-blue-900">
                                Total
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                    
                </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {user?.seenBy &&
                            user.seenBy.map((eachUser) => {
                                const eachStamp = JSON.parse(eachUser);

                                return (
                                    <tr
                                        className="border-b border-gray-200 dark:border-gray-700"
                                        key={eachStamp?.time}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                                        >
                                            {eachStamp.email}
                                        </th>
                                        <td className="px-6 text-gray-700 font-bold text-lg  py-4">
                                            {eachStamp.time.map(
                                                (eachTime, index) => {
                                                    const time = new Date(
                                                        eachTime
                                                    );
                                                    return (
                                                        <p
                                                            key={index}
                                                            className="mt-2"
                                                        >
                                                            {time.toLocaleString()}
                                                        </p>
                                                    );
                                                }
                                            )}
                                        </td>
                                        <td className="px-6 py-4 bg-gray-50 font-bold text-lg text-white dark:bg-gray-800">
                                            {eachStamp.$id}
                                        </td>
                                        <td className="px-6 text-gray-700  py-4 font-bold text-lg">
                                            {eachStamp.total}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserAnalytics;
