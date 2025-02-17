import { useCallback } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const useErrorHandler = () => {
 const handleError = useCallback((error: AxiosError) => {
  if (error.response) {
   const errorMessage = (error.response.data as { message: string }).message;
   toast.error(errorMessage);
   console.error("Server Error:", error.response.data);
  } else if (error.request) {
   const errorMessage = (error.request.data as { message: string }).message;
   toast.error(errorMessage);
   console.error("Network Error:", error.request);
  } else {
   const errorMessage = (error as { message: string }).message;
   toast.error(errorMessage);
   console.error("Error:", error.message);
  }
 }, []);

 return handleError;
};

export default useErrorHandler;
