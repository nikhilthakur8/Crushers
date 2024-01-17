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
    if (userData.labels.includes("admin")) navigate(-1);
    else {
      getUserById(userId).then((userData) => {
        setUser(userData);
      });
    }
  }, [userId]);
  return (
    <div className="w-[95%] mx-auto my-5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-black">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Email Id
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                User Id
              </th>
              {/* <th scope="col" className="px-6 py-3">
                    
                </th> */}
            </tr>
          </thead>
          <tbody>
            {user?.seenBy &&
              user.seenBy.map((eachUser) => {
                const eachStamp = JSON.parse(eachUser);
                const time = new Date(eachStamp.time);
                return (
                  <tr
                    className="border-b border-gray-200 dark:border-gray-700"
                    key={eachStamp.time}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {eachStamp.email}
                    </th>
                    <td className="px-6 text-gray-700  py-4">
                      {time.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 text-white dark:bg-gray-800">
                      {eachStamp.$id}
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
