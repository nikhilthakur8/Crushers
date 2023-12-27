/* eslint-disable react/prop-types */
import { ArrowRight, ImageDown } from "lucide-react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated } from "../../Jwt/isAuthenticated";
function Profile() {
  const [imgLink, setImageLink] = useState(
    "https://cdn-icons-png.flaticon.com/512/219/219970.png"
  );
  const filePreview = (file) => {
    setImageLink(URL.createObjectURL(file));
  };
  const userData = isAuthenticated();
  return (
    <Container>
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-2xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  my-14 bg-white shadow-xl  rounded-lg text-gray-900 flex flex-col">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>

        <div className="mx-auto  w-36 h-36 relative -mt-16 border-4 border-white group rounded-full overflow-hidden">
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

        <div className="text-center mt-1 mx-4">
          <form>
            <h1 className="bg-gray-400 md:w-4/5 md:mx-auto rounded-xl font-semibold text-2xl px-5 py-3">
              <p className="text-black inline  font-semibold">Name: </p>
              <p className="inline">
              {userData?.name}
              </p>
            </h1>

            <p className="px-5 text-lg pt-3">
              <p className="text-black inline  font-semibold">User Id: </p>
              <p className="inline">
              {userData?.$id}
              </p>
            </p>
            <p className="px-5 text-lg py-3">
              <p className="text-black  inline font-semibold">Email: </p>
              <p className="inline">
              {userData?.email}
              </p>
            </p>
          </form>
        </div>
        <Link to="/logout">
          <button className=" w-[30%] mx-auto  flex items-center justify-center bg-black px-10 py-2 my-7 text-base md:text-lg font-semibold group text-white  hover:text-xl hover:bg-black/80 ">
            Logout
            <ArrowRight className="group-hover:translate-x-1 group-hover:size-5 ml-2 h-4 w-4" />
          </button>
        </Link>
      </div>
    </Container>
  );
}

export default Profile;
