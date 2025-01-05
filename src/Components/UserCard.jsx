/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function UserCard({ result, ...props }) {
    return (
        <Link to={`/user/${result.$id}`}>
            <div
                className=" flex items-center w-[240px] md:w-[380px] "
                {...props}
            >
                <img
                    className="ml-5 mr-3 my-3 rounded-full md:w-14 w-12 object-center"
                    src={result.imgLink}
                    alt="Loading"
                />
                <div className="text-neutral-300">
                    <p>{result.fullName}</p>
                    <div className="flex  w-full">
                        <p className="mr-20">{result.branch}</p>
                        <p className="md:block hidden">{`DOB: ${result.DOB}`}</p>
                    </div>
                </div>
            </div>
            <hr className="border-slate-700" />
        </Link>
    );
}

export default UserCard;
