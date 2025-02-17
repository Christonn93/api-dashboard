import { axiosInstance } from "./axiosInstance";

export const registerUser = async ({ email, password }: { email: string; password: string }) => {
 try {
  const response = await axiosInstance.post("/register", {
   email,
   password,
  });
  return response.data;
 } catch (error: unknown) {
  console.error(error);
 } finally {
  console.log("API connection established");
  return;
 }
};
