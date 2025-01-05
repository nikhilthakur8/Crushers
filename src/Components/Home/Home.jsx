/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { RandomUserList } from "../../appwrite/config";
import UserCard from "./UserCard";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import { Hero } from "../About/Hero";
import { ArrowUpRight } from "lucide-react";
export const homeDataLoader = async () => {
    return await RandomUserList();
};
function Home() {
    document.title = "Crushers | Person details finder";
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        RandomUserList().then(({ selectedUser, total }) => {
            setUser(selectedUser);
            setTotal(total);
            setLoading(false);
        });
    }, []);
    return (
        <Container className="bg-black/[0.96] bg-grid-white/[0.08]">
            <Hero />
            <div>
                <h1 className="text-xl md:text-3xl text-neutral-300 font-semibold font-sans inline-block ">
                    Total Profile ({total})
                </h1>
                {loading ? (
                    <div className="w-full  h-[80vh] flex justify-center items-center">
                        <ClipLoader size={100} />
                    </div>
                ) : (
                    <div className="grid md:grid-flow-row grid-flow-row grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 my-5 md:my-10 mb-10">
                        {user.map((eachUser) => (
                            <UserCard key={eachUser.$id} user={eachUser} />
                        ))}
                    </div>
                )}
            </div>

            {/* <div className="p-5 mt-3 text-white md:p-12">
                <p className="  sm:text-2xl font-semibold">Advance Search</p>
                <p className="text-sm sm:text-xl">
                    Search By Branch, Date of Birth, Mobile Number
                </p>
                <Link to="/search">
                    <button className="py-1 pl-4 pr-3 mt-3 hover:bg-blue-600 text-white text-lg  rounded-3xl">
                        Search Now
                        <ArrowUpRight
                            size={27}
                            className="inline ml-2 bg-blue-900 rounded-full p-1 my-1"
                        />
                    </button>
                </Link>
            </div> */}
        </Container>
    );
}

export default Home;
