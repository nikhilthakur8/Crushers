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
                console.log(userData);
                if (!userData.emailVerification) {
                    logout();
                    navigate("/wait");
                } else {
                    navigate("/");
                    dispatch(login(userData));
                    localStorage.setItem("uid", encryptData(userData));
                }
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);
    return (
        <div className="text-xl text-center my-10  text-blue-800">
            {/* <AlertBanner message={axiosError} /> */}
            Redirecting to Home Page ...
        </div>
    );
};
