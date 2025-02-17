import { axiosInstance } from "./axiosInstance";

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
 try {
  const response = await axiosInstance.post("/auth/login", {
   email,
   password,
  });
  return response;
 } catch (error: unknown) {
  console.error(error);
 }
};
