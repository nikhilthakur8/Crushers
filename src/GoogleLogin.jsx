import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { login } from "./features/User";
import { encryptData } from "./Jwt/auth";
import { account } from "./appwrite/auth";

export const GoogleLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const secret = searchParams.get("secret");
        const userId = searchParams.get("userId");
        if (!userId || !secret) navigate("/login");
        const loginWithGoogle = async () => {
            try {
                await account.createSession(userId, secret);
                const userData = await account.get();
                dispatch(login(userData));
                localStorage.setItem("uid", encryptData(userData));
                navigate("/");
            } catch (error) {
                navigate("/login");
            }
        };
        loginWithGoogle();
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
