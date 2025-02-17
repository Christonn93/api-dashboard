import { useActiveAccount } from "@/hooks/helpers/useActiveAccount";
import { Authenticated } from "./Authenticated";
import { Unauthenticated } from "./Unauthenticated";

export const BaseLayout = () => {
 const { isActive } = useActiveAccount();

 return <>{isActive ? <Authenticated /> : <Unauthenticated />}</>;
};
