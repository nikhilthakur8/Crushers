import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import NavBar from "./Components/Nav/NavBar";
import { isAuthenticated } from "./Jwt/isAuthenticated";
import { useDispatch } from "react-redux";
import { login } from "./features/User";

function Auth() {
  const userData = isAuthenticated();
  const dispatch = useDispatch();
  if (userData) {
    dispatch(login(userData));
  }
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Auth;
