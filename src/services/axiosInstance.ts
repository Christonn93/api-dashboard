import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
 baseURL: "http://localhost:5000",
 timeout: 1000,
 headers: {
  "Content-Type": "application/json",
 },
});
