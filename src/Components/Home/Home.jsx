/* eslint-disable react-refresh/only-export-components */
import {useEffect, useState } from "react";
import Container from "../Container/Container";
import { RandomUserList } from "../../appwrite/config";
import UserCard from "./UserCard";
import ClipLoader from "react-spinners/ClipLoader";
import { useLoaderData } from "react-router-dom";
export const homeDataLoader = async () => {
  return await RandomUserList();
};
function Home() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
  useEffect(() => {
    setUser(data);
    setLoading(false);
  }, [data]);
  return (
    <Container color="bg-black/25">
      {loading ? (
        <div className="w-full  h-[80vh] flex justify-center items-center">
          <ClipLoader size={100} />
        </div>
      ) : (
        <div className="grid md:grid-flow-row grid-flow-row grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 p-4 md:p-10 ">
          {user.map((eachUser) => (
            <UserCard key={eachUser.$id} user={eachUser} />
          ))}
        </div>
      )}
    </Container>
  );
}

export default Home;
