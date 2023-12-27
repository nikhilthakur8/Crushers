import NavBar from "./Components/Nav/NavBar";
import Container from "./Components/Container/Container";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { isAuthenticated } from "./Jwt/isAuthenticated";
import { useEffect, useState } from "react";
import { getUser, logout } from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout as userLogout } from "./features/User";
function App() {
  const userData = isAuthenticated();
  const [validUser, setValidUser] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userData) navigate("/login");
    if (!userData.emailVerification) {
      localStorage.clear();
      logout();
      navigate("/wait");
    } else {
      setValidUser(true);
      dispatch(login(userData));
    }
  }, []);
  return (
    validUser && (
      <Container style="bg-green-400">
        <NavBar />
        <Outlet />
        <Footer />
      </Container>
    )
  );
}
export default App;
