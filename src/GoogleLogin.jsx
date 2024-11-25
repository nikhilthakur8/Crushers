import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./features/User";
import { encryptData } from "./Jwt/auth";
import { account, logout } from "./appwrite/auth";
import { set } from "react-hook-form";

export const GoogleLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        account
            .get("current")
            .then((userData) => {
                dispatch(login(userData));
                localStorage.setItem("uid", encryptData(userData));
                navigate("/");
            })
            .catch(() => {
                navigate("/login");
            });
        
    }, []);
    return (
        <div className="text-xl text-center my-10  text-blue-800">
            {/* <AlertBanner message={axiosError} /> */}
            <p> Redirecting to Page .....</p>
            <p className="text-black text-sm mt-2">
                if not redirected automatically{" "}
                <a href="/" className="text-blue-900 underline">
                    click here
                </a>{" "}
            </p>
        </div>
    );
};
