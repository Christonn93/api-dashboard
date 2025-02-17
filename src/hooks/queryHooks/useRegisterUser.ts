import { registerUser } from "@/services/registerUser";
import { useMutation } from "@tanstack/react-query";

type RegisterUser = {
 email: string;
 password: string;
};

export const useRegisterUser = () => {
 return useMutation({
  mutationFn: async ({ email, password }: RegisterUser) => {
   try {
    return await registerUser({ email, password });
   } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    throw new Error(errorMessage);
   }
  },
 });
};
