import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { RandomUserList } from "../../appwrite/config";
import UserCard from "./UserCard";
import ClipLoader from "react-spinners/ClipLoader";
function Home() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    RandomUserList().then((res) => {
      setUser(res);
      setLoading(false);
    });
  }, []);
  return (
    <Container color="bg-black/25">
      {
        loading? <div className="w-full  h-[80vh] flex justify-center items-center">
          <ClipLoader 
          size={100}/>
          </div>:
      <div className="grid md:grid-flow-row grid-flow-row grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 p-4 md:p-10 ">
        {user.map((eachUser) => (
          <UserCard key={eachUser.$id} user={eachUser} />
        ))}
      </div>
      }
    </Container>
  );
}

export default Home;
