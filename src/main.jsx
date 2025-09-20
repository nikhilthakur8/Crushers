import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import User from "./Components/User/User.jsx";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import PageNotFound from "./Components/PageNotFound.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Logout from "./Components/Logout.jsx";
import Wait from "./Components/Wait.jsx";
import Auth from "./Auth.jsx";
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
import TermsOfService from "./Components/TermsAndService.jsx";
import UserAnalytics from "./Components/User Analytics/UserAnalytics.jsx";
import { Search } from "./Components/Search/Search.jsx";
import { GoogleLogin } from "./GoogleLogin.jsx";
import { FaceSearch } from "./Components/FaceSearch/FaceSearch.jsx";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="user/:userId" element={<User />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/admin">
                    <Route
                        path="user/analytics/:userId"
                        element={<UserAnalytics />}
                    />
                </Route>
                <Route path="/face-search" element={<FaceSearch />} />
            </Route>
            <Route path="/" element={<Auth />}>
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/about" element={<About />} />
                <Route path="/termsofservice" element={<TermsOfService />} />
            </Route>
            <Route path="/login-with-google" element={<GoogleLogin />} />
            <Route path="/wait" element={<Wait />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
        <Analytics />
    </Provider>
);
