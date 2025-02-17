import { AxiosInstance } from "axios";

export const apiConnect = async (axiosInstance: AxiosInstance) => {
 try {
  const response = await axiosInstance.get("/api");
  return response.data;
 } catch (error: unknown) {
  console.error(error);
 } finally {
  console.log("API connection established");
  return;
 }
};
