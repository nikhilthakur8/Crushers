import React from "react";
import { Link } from "react-router-dom";

function Notification() {
    return (
        <Link to={"/face-search"}>
            <div className=" py-1 bg-blue-950 text-white cursor-pointer   font-semibold  text-center">
                Introducing Face Search Option 🔎🔎
            </div>
        </Link>
    );
}

export default Notification;
