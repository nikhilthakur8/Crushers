/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { TrailingIconButtons } from "../Button";
import Container from "../Container/Container";
import BottomTextInput from "../BottomTextInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/User.js";
import { useDispatch } from "react-redux";
import { createAccount, getUser } from "../../appwrite/auth.js";
import { AlertBanner } from "../AlertBanner.jsx";
import { useState } from "react";
import { encryptData } from "../../Jwt/auth.js";
function Signup() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(data) {
    setLoading(true);
    reset();
    createAccount(data)
      .then((res) => {
        if (res.code && res.code != 200) setError(res.message);
        if (res.code && res.code != 200) setError(res.message);
        else {
          setLoading(false);
          getUser().then((res) => {
            navigate("/");
            dispatch(login(res));
            localStorage.setItem("uid", encryptData(res));
          });
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }
  return (
    <Container style="#2f2f4c">
      <div className="w-4/5 lg:w-[30%] md:w-[40%]  h-[100vh] mx-auto flex justify-center items-center flex-col">
        {error && error.length > 0 && <AlertBanner message={error} />}
        <h1 className="text-3xl mb-5 text-white ">Sign up to Crushers App</h1>
        <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
          <BottomTextInput
            label={"Full Name"}
            type={"text"}
            name={"name"}
            errors={errors}
            placeholder={"Bhupender Jogi"}
            {...register("name", {
              required: "Full Name Required",
            })}
          />

          <BottomTextInput
            label={"Email"}
            type={"email"}
            name={"email"}
            errors={errors}
            placeholder={"Bhupenderjogi@usa.com"}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                message: "Invalid Email",
              },
            })}
          />
          <BottomTextInput
            label={"Password"}
            type={"password"}
            name={"password"}
            placeholder={"Enter Password"}
            errors={errors}
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=\S{8,}$).+/,
                message: "Password of 8 charaters",
              },
            })}
          />

          <TrailingIconButtons
            loading={loading}
            type={"submit"}
            text={"Create Account"}
          />
        </form>
        <div className="mt-6">
          <p className="text-white/70 text-center">
            Already have an account?
            <Link to="/login" className="text-white font-serif">
              <button className="border rounded-md mx-2 px-1.5 py-0.5">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
