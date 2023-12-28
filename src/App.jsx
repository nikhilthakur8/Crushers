import NavBar from "./Components/Nav/NavBar";
import Container from "./Components/Container/Container";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { isAuthenticated } from "./Jwt/isAuthenticated";
import { useEffect, useState } from "react";
import { getUser, logout, userLogin } from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout as userLogout } from "./features/User";
import { getUserById } from "./appwrite/config";
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
          if (!res.emailVerification) {
            logout();
            localStorage.clear();
            navigate("/wait");
          } else if(res.emailVerification){
            dispatch(login(res));
            setValidUser(true);
          }
        })
        .catch(() => {
          navigate("/login");
        });
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
