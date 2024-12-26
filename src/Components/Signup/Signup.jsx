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
import { GoogleLogin } from "../Login/GoogleLogin.jsx";
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
    document.title = "Signup - Crushers";
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
            <div className="w-[85%] lg:w-[30%] md:w-[40%] py-20 min-h-dvh mx-auto flex justify-center items-center flex-col">
                {error && error.length > 0 && <AlertBanner message={error} />}
                <div>
                    <img
                        className="w-12 h-12  rounded-sm -mt-5 mb-5"
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsNzXnQ3DZVtU8RteFSaX9-UAvwErM_fk_DPPRjWDufrHpQ7wp"
                        alt=""
                    />
                </div>
                <h1 className="md:text-3xl text-2xl  mb-5 text-white ">
                    Sign up to Crushers App
                </h1>
                <GoogleLogin />
                <div className="flex text-white w-full space-x-3 mt-3 items-center">
                    <div className="h-0.5 bg-gray-500 w-full "></div>
                    <p>OR</p>
                    <div className="h-0.5 bg-gray-500  w-full"></div>
                </div>
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
                    <p className="text-white text-xs -mt-3 mb-3">
                        By proceeding, you are indicating that you have read and
                        agree to our{" "}
                        <Link to="/termsofservice" className="underline">
                            {" "}
                            Terms of Service{" "}
                        </Link>{" "}
                        &{" "}
                        <Link to="/PrivacyPolicy" className="underline">
                            {" "}
                            Privacy Policy{" "}
                        </Link>
                    </p>
                    <TrailingIconButtons
                        loading={loading}
                        type={"submit"}
                        text={"Create Account"}
                    />
                </form>
                <div className="mt-5">
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
