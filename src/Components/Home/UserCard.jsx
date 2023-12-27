import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

/* eslint-disable react/prop-types */
function UserCard({ user }) {
  const [loading,setLoading]= useState(true);
  return (

    <Link to={`/user/${user.$id}`}>
      <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border bg-gray-300 rounded-xl ">
        <div className="relative mx-4 mt-4 flex justify-center items-center overflow-hidden text-gray-700 bg-white/60 shadow-xl bg-clip-border rounded-xl md:h-60 h-32">
          <img className={`md:w-40 w-24 rounded-md overflow-hidden ${loading &&"hidden"}`} src={user.imgLink} alt="profile-picture" onLoad={()=>setLoading(false)}/>
          <div className={`w-full h-full flex justify-center items-center ${!loading &&"hidden"}`}>
          <ClipLoader 
          size={40}/>
          </div>
        </div>
        <div className="md:p-6 p-2 text-center w-full">
          <h4 className="block text-md mb-1 md:mb-2 font-sans md:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {user.fullName}
          </h4>
          <p className="block font-sans text-sm md:text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-black ">
            {user.branch}
          </p>
          <p className="font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-black md:block hidden">
            DOB: {user.DOB}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
