import { decryptData } from "./auth";
export function isAuthenticated() {
  const cryptedtoken = localStorage.getItem("uid");
  if (!cryptedtoken) return undefined;
  try {
    const userData = decryptData(cryptedtoken);
    return userData;
  } catch (error) {
    return undefined;
  }
}
