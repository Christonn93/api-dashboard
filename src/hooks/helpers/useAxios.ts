import { useEffect } from "react";
import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import { axiosInstance } from "../../services/axiosInstance";
import useErrorHandler from "../handlers/useErrorHandler";

const useAxios = () => {
 const handleError = useErrorHandler();

 useEffect(() => {
  const requestInterceptor = axiosInstance.interceptors.request.use(
   (config: InternalAxiosRequestConfig) => {
    console.log("Request Interceptor", config);
    return config;
   },
   (error: AxiosError) => {
    handleError(error);
    return Promise.reject(error);
   }
  );

  const responseInterceptor = axiosInstance.interceptors.response.use(
   (response: AxiosResponse) => {
    console.log("Response Interceptor", response);
    return response;
   },
   (error: AxiosError) => {
    handleError(error);
    return Promise.reject(error);
   }
  );

  return () => {
   axiosInstance.interceptors.request.eject(requestInterceptor);
   axiosInstance.interceptors.response.eject(responseInterceptor);
  };
 }, [handleError]);

 return axiosInstance;
};

export default useAxios;
