import { Link, useNavigate } from "react-router-dom";
import BottomTextInput from "../BottomTextInput";
import { TrailingIconButtons } from "../Button";
import Container from "../Container/Container";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../features/User";
import { account, getUser, userLogin } from "../../appwrite/auth";
import { useState } from "react";
import { AlertBanner } from "../AlertBanner";
import { encryptData } from "../../Jwt/auth";

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
    const googleUserLogin = async () => {
        try {
            account.createOAuth2Session(
                "google",
                "https://crushers.vercel.app/login-with-google",
                "https://crushers.vercel.app/login"
            );
        } catch (error) {
            error;
        }
    };
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
        <Container style="#2f2f4c">
            <div className="w-[85%]  lg:w-[30%] md:w-[40%] py-10 min-h-dvh mx-auto flex justify-center items-center flex-col">
                {error && error.length > 0 && <AlertBanner message={error} />}
                <div>
                    <img
                        className="w-12 h-12 -mt-5 rounded-sm mb-5 "
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsNzXnQ3DZVtU8RteFSaX9-UAvwErM_fk_DPPRjWDufrHpQ7wp"
                        alt=""
                    />
                </div>
                <h1 className="md:text-3xl text-2xl mb-5 text-white ">
                    Login to Crushers App
                </h1>
                <a
                    onClick={googleUserLogin}
                    className=" w-full flex space-x-4 my-3 font-semibold text-black hover:bg-blue-500/70 hover:border-black text-lg justify-center items-center border border-gray-400 py-2 group rounded-sm  transition-all cursor-pointer"
                >
                    <svg
                        width="25px"
                        height="25px"
                        className="group-hover:rotate-[360deg] duration-700 "
                        viewBox="0 0 533.5 544.3"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                        />
                        <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                        />
                        <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                        />
                        <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                        />
                    </svg>
                    <p className="text-white">Google</p>
                </a>
                <div className="flex text-white w-full space-x-3 mt-3 items-center">
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
                    <p className="text-white/70 ">
                        Need an account?
                        <Link to="/signup" className="text-white font-serif">
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
