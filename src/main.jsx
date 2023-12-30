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
import Home, { homeDataLoader } from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import User, { userCardLoader } from "./Components/User/User.jsx";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import PageNotFound from "./Components/PageNotFound.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Logout from "./Components/Logout.jsx";
import Wait from "./Components/Wait.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="/" loader={homeDataLoader} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="user/:userId" loader={userCardLoader} element={<User />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/wait" element={<Wait/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
