import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
 baseURL: "http://localhost:5000",
 timeout: 5000,
 headers: {
  "Content-Type": "application/json",
 },
});

// Add request interceptor to attach token
axiosInstance.interceptors.request.use(
 (config) => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
   const { token } = JSON.parse(storedUser);
   if (token) {
    config.headers.Authorization = `Bearer ${token}`;
   }
  }
  return config;
 },
 (error) => {
  return Promise.reject(error);
 }
);
