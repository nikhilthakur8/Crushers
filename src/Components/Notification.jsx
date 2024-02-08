import React from "react";
import { Link } from "react-router-dom";

function Notification() {
    return (
        <Link to={"/search"}>
            <div className=" py-1 bg-blue-950 text-white cursor-pointer   font-semibold  text-center">
                Introducing Advance Search Option 🔎🔎
            </div>
        </Link>
    );
}

export default Notification;
