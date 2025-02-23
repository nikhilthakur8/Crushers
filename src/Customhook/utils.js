import { account } from "../appwrite/auth";

export const googleUserLogin = async () => {
    try {
        account.createOAuth2Session(
            "google",
            "https://crushers.vercel.app/login-with-google",
            // "http://192.168.1.37/login-with-google",
            "https://crushers.vercel.app/login"
        );
    } catch (error) {
        error;
    }
};
