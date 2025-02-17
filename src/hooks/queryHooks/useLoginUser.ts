import { loginUser } from "@/services/loginUser";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type LoginUser = {
 email: string;
 password: string;
};

export const useLoginUser = () => {
 const navigate = useNavigate();

 const mutation = useMutation({
  mutationFn: async ({ email, password }: LoginUser) => {
   try {
    const response = await loginUser({ email, password });
    sessionStorage.setItem("userData", JSON.stringify(response?.data));
    return response;
   } catch (error) {
    toast.error(`Error when logging in: ${String(error)}`);
    throw error;
   }
  },
  onSuccess: () => {
   toast.success("Logged in successfully!");
   navigate("/user");
  },
  onError: (error) => {
   console.error("Login failed:", error);
  },
 });

 return {
  mutate: mutation.mutate,
  isLoading: mutation.isPending,
  isError: mutation.isError,
  error: mutation.error,
 };
};
