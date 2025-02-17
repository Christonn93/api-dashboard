import { getUserData } from "@/services/getUserData";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../helpers/useAxios";

export const useGetUserData = (id: string) => {
 const axiosInstance = useAxios();

 const queryFn = async () => getUserData(axiosInstance, id);

 const { data, isLoading, error, refetch } = useQuery({
  queryKey: ["userData", id],
  queryFn,
  staleTime: 5 * 60 * 1000,
  enabled: !!id,
 });

 return {
  data: data,
  isLoading,
  error,
  refetch,
 };
};
