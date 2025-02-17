import { AxiosInstance } from "axios";

export const getUserData = async (axiosInstance: AxiosInstance, id: string) => {
 try {
  const response = await axiosInstance.get(`/user/${id}`);

  sessionStorage.setItem("userData", JSON.stringify(response.data));
  return response;
 } catch (error) {
  console.error("Failed to fetch user data", error);
 }
};
