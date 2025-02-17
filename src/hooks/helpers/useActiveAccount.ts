import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

export const useActiveAccount = () => {
 const [isActive, setIsActive] = useState<boolean>(false);
 const { user } = useAuthStore();

 useEffect(() => {
  if (user) {
   setIsActive(true);
  } else {
   setIsActive(false);
  }
 }, [user]);

 return { isActive, setIsActive };
};
