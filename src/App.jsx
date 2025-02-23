/* eslint-disable no-undef */
import NavBar from "./Components/Nav/NavBar";
import Container from "./Components/Container/Container";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { isAuthenticated } from "./Jwt/isAuthenticated";
import { useEffect, useState } from "react";
import { getUser, logout, userLogin } from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout as userLogout } from "./features/User";
import Notification from "./Components/Notification";
function App() {
    const userData = isAuthenticated();
    const [validUser, setValidUser] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!userData) navigate("/login");
        else {
            getUser()
                .then((res) => {
                    if (
                        res.emailVerification &&
                        (res.labels.includes("user") ||
                            res.labels.includes("admin"))
                    ) {
                        dispatch(login(res));
                        setValidUser(true);
                    } else {
                        logout();
                        localStorage.clear();
                        navigate("/wait");
                    }
                })
                .catch(() => {
                    navigate("/login");
                });
        }
    }, []);
    return (
        validUser && (
            <div>
                <Notification />
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        )
    );
}
export default App;
