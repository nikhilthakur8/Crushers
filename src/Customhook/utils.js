import { account } from "../appwrite/auth";

export const googleUserLogin = async () => {
    account.createOAuth2Token(
        "google",
        // "https://crushers.vercel.app/login-with-google",
        "http://192.168.1.45/login-with-google",
        "https://crushers.vercel.app/login"
    );
};
