/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function UserCard({ result, ...props }) {
  return (
    <Link to={`/user/${result.$id}`}>
      <div
        className=" flex  items-center w-[260px] md:w-[400px] bg-gray-400"
        {...props}
      >
        <img
          className="ml-5 mr-3 my-3 rounded-full md:w-14 w-12 object-center"
          src={result.imgLink}
          alt="Loading"
        />
        <div>
          <p>{result.fullName}</p>
          <div className="flex  w-full">
            <p className="mr-20">{result.branch}</p>
            <p className="md:block hidden">{`DOB: ${result.DOB}`}</p>
          </div>
        </div>
      </div>
      <hr />
    </Link>
  );
}

export default UserCard;
