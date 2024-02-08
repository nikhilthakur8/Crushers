import { Account, Client } from "appwrite";
import service from "../service";
const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(service.appwriteProjectId);
const account = new Account(client);

export const createAccount = async ({ name, email, password }) => {
    const id = email.split("@")[0];
    try {
        const userAccount = await account.create(id, email, password, name);
        if (userAccount) {
            return userLogin({ email, password });
        }
    } catch (error) {
        return error;
    }
};

export const userLogin = async ({ email, password }) => {
    try {
        const userAccount = account.createEmailSession(email, password);
        return userAccount;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const logout = async () => {
    try {
        return await account.deleteSessions();
    } catch (error) {
        return error;
    }
};

export const getUser = async () => {
    try {
        return await account.get();
    } catch (error) {
        return error;
    }
};

export const updatePassword = async ({ newPassword, oldPassword }) => {
    try {
        return await account.updatePassword(newPassword, oldPassword);
    } catch (error) {
        return error;
    }
};

export const updateEmail = async ({ email, password }) => {
    try {
        return await account.updateEmail(email, password);
    } catch (error) {
        return error;
    }
};
