import React from "react";
import { Link } from "react-router-dom";

function Notification() {
    return (
        <Link to={"/search"}>
            <div className="py-1 bg-gradient-to-l from-indigo-700 via-purple-700 to-pink-700  text-white cursor-pointer  font-semibold  text-center">
                Advanced Search Option 🔎🔎
            </div>
        </Link>
    );
}

export default Notification;
