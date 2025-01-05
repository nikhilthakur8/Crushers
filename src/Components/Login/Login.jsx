import { Link, useNavigate } from "react-router-dom";
import BottomTextInput from "../BottomTextInput";
import { TrailingIconButtons } from "../Button";
import Container from "../Container/Container";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../features/User";
import { getUser, userLogin } from "../../appwrite/auth";
import { useState } from "react";
import { AlertBanner } from "../AlertBanner";
import { encryptData } from "../../Jwt/auth";
import { GoogleLogin } from "./GoogleLogin";

function Login() {
    document.title = "Login - Crushers";
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function onSubmit(data) {
        setLoading(true);
        userLogin(data)
            .then(() => {
                setLoading(false);
                getUser().then((res) => {
                    dispatch(login(res));
                    localStorage.setItem("uid", encryptData(res));
                    navigate("/");
                });
            })

            .catch((error) => {
                setLoading(false);
                setError(error.message);
            });
    }

    return (
        <Container className={"bg-slate-900"}>
            <div className="w-[85%]  lg:w-[30%] md:w-[40%] py-10 min-h-dvh mx-auto flex justify-center items-center flex-col">
                {error && error.length > 0 && <AlertBanner message={error} />}
                <div>
                    <img
                        className="w-12 h-12 -mt-5 rounded-sm mb-5 "
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsNzXnQ3DZVtU8RteFSaX9-UAvwErM_fk_DPPRjWDufrHpQ7wp"
                        alt=""
                    />
                </div>
                <h1 className="md:text-3xl text-2xl mb-5 text-gray-300 ">
                    Login to Crushers App
                </h1>
                <GoogleLogin />
                <div className="flex text-gray-300 w-full space-x-3 mt-3 items-center">
                    <div className="h-0.5 bg-gray-500 w-full "></div>
                    <p>OR</p>
                    <div className="h-0.5 bg-gray-500  w-full"></div>
                </div>

                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
                        text={"Login"}
                    />
                </form>

                <div className="mt-5">
                    <p className="text-gray-300/70 ">
                        Need an account?
                        <Link to="/signup" className="text-gray-300 font-serif">
                            <button className="border rounded-md mx-2 px-1.5 py-0.5">
                                Sign up
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default Login;
