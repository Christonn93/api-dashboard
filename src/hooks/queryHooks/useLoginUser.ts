import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/hooks/store/useUserStore";
import { registerUser } from "@/services/registerUser";
import { useNavigate } from "react-router-dom";

type RegisterUser = {
 email: string;
 password: string;
};

export const useLoginUser = () => {
 const setUser = useUserStore((state: { setUser: any }) => state.setUser);
 const navigate = useNavigate();

 return useMutation({
  mutationFn: async ({ email, password }: RegisterUser) => {
   try {
    const response = await registerUser({ email, password });
    setUser(response);
    navigate("/user");
    return response;
   } catch (error: unknown) {
    throw new Error((error as Error).message);
   }
  },
 });
};
