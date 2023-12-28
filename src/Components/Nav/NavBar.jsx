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
      setTimeout(()=>{
        setItems([]);
      },700);
    }
  }, [inputUser]);
  return (
    <div className="w-full py-2 min-h-[10vh] bg-black sticky top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsNzXnQ3DZVtU8RteFSaX9-UAvwErM_fk_DPPRjWDufrHpQ7wp" className="m-0  p-0 md:w-16 md:h-16 w-12 h-12" height={50} width={50}   alt="" />
            {/* <svg
              width="30"
              height="30"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="white"
              />
            </svg> */}
          </span>
          {/* <span className="font-bold text-2xl text-white">Crushers</span> */}
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
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
        <div className="flex relative grow md:justify-end justify-center">
          <input
            className="flex h-10 md:w-[400px] w-[250px] rounded-md bg-gray-200 px-3 py-2 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-white/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-lg"
            type="text"
            placeholder="Search"
            onClick={(e) => e.currentTarget.select()}
            onChange={(e) => setInputUser(e.target.value)}
          ></input>
          <div
            onClick={() => {
              setItems([]);
            }}
            className="absolute z-10 shadow-lg shadow-black top-12 max-h-[70vh] overflow-auto cursor-pointer  rounded-xl "
          >
            {loading ? (
              <div className="overflow-hidden flex justify-center md:w-[400px] w-[260px] h-12 items-center bg-gray-300 font-bolder ">
                <ClipLoader />
              </div>
            ) : (
              items &&
              items.length >= 0 &&
              items.map((eachitems) => (
                <UserCard key={eachitems.$id} result={eachitems} />
              ))
            )}
          </div>
        </div>
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
          <Menu onClick={toggleMenu} className="h-7 mx-2 w-7 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-white ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      {/* <svg
                        width="30"
                        height="30"
                        viewBox="0 0 50 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                          fill="white"
                        />
                      </svg> */}
                      <img 
                      className="m-0 p-0 w-14 h-14"src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsNzXnQ3DZVtU8RteFSaX9-UAvwErM_fk_DPPRjWDufrHpQ7wp"    alt="" />
                    </span>
                    <span className="font-bold text-white">Crushers</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-white"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
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
                  <Link to="/profile">
                    <img
                      className="inline-block border-2 border-white active:border-green-600 h-10 w-10 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                      alt="Loading..."
                    />
                  </Link>
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
