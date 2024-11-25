import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./features/User";
import { encryptData } from "./Jwt/auth";
import { account, logout } from "./appwrite/auth";

export const GoogleLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        account
            .get("current")
            .then((userData) => {
                if (
                    userData.labels.includes("user") &&
                    userData.emailVerification
                ) {
                    navigate("/");
                    dispatch(login(userData));
                    localStorage.setItem("uid", encryptData(userData));
                } else {
                    logout();
                    navigate("/wait");
                }
            })
            .catch(() => {
                navigate("/login");
            });
    }, []);
    return (
        <div className="text-xl text-center my-10  text-blue-800">
            {/* <AlertBanner message={axiosError} /> */}
            Redirecting to Home Page ...
        </div>
    );
};
