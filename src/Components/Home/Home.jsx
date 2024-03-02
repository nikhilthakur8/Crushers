/* eslint-disable react-refresh/only-export-components */
import { useCallback, useEffect, useState } from "react";
import Container from "../Container/Container";
import { RandomUserList } from "../../appwrite/config";
import UserCard from "./UserCard";
import ClipLoader from "react-spinners/ClipLoader";
import { Link, useLoaderData } from "react-router-dom";
import { Hero } from "../About/Hero";
import { ArrowUpRight } from "lucide-react";
export const homeDataLoader = async () => {
    return await RandomUserList();
};
function Home() {
    document.title = "Crushers | Person details finder";
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        RandomUserList().then((data) => {
            setUser(data);
            setLoading(false);
        });
    }, []);
    return (
        <Container color="bg-blue-50">
            <Hero />
            <div
                style={{
                    backgroundImage:
                        'url("https://img.freepik.com/premium-photo/blue-sky-watercolor-effect-stains-paint-splatter-grunge-background-texture-soft-blue-pastel-website-banner-design_364465-1395.jpg")',
                    width: "100%",
                    height: "auto",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
            >
                <h1 className="text-xl mx-3 px-1  md:mx-10 inline-block font-semibold text-blue-800 font-serif border-b-2 border-black pt-5 pb-1">
                    Random Profile
                </h1>
                {loading ? (
                    <div className="w-full  h-[80vh] flex justify-center items-center">
                        <ClipLoader size={100} />
                    </div>
                ) : (
                    <div
                        style={{
                            backgroundImage:
                                'url("https://img.freepik.com/premium-photo/blue-sky-watercolor-effect-stains-paint-splatter-grunge-background-texture-soft-blue-pastel-website-banner-design_364465-1395.jpg")',
                            width: "100%",
                            height: "auto",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="grid md:grid-flow-row grid-flow-row grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 p-4 pt-3 md:p-10  "
                    >
                        {user.map((eachUser) => (
                            <UserCard key={eachUser.$id} user={eachUser} />
                        ))}
                    </div>
                )}
            </div>

            <div
                style={{
                    backgroundImage:
                        'url("https://t4.ftcdn.net/jpg/03/09/24/63/240_F_309246316_uXQOS2tcdUceurcmAJprpxBbbktiSW0C.jpg")',

                    width: "100%",
                    height: "auto",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-blue-100 p-5 mt-3 text-white md:p-12"
            >
                <p className="  sm:text-2xl font-semibold">Advance Search</p>
                <p className="text-sm sm:text-xl">
                    Search By Branch, Date of Birth, Mobile Number
                </p>
                <Link to="/search">
                    <button className="bg-blue-700 py-1 pl-4 pr-3 mt-3 hover:bg-blue-600 text-white text-lg  rounded-3xl">
                        Search Now
                        <ArrowUpRight
                            size={27}
                            className="inline ml-2 bg-blue-900 rounded-full p-1 my-1"
                        />
                    </button>
                </Link>
            </div>
        </Container>
    );
}

export default Home;
