import { useQuery } from "@tanstack/react-query";
import useAxios from "../helpers/useAxios";
import { apiConnect } from "@/services/apiConnect";

export const useApiConnection = () => {
 const axiosInstance = useAxios();

 const apiConnection = useQuery({
  queryKey: ["apiConnection"],
  queryFn: async () => {
   try {
    return await apiConnect(axiosInstance);
   } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    throw new Error(errorMessage);
   }
  },
 });

 return apiConnection;
};
