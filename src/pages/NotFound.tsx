import { NotingFound } from "@/components/pageTemplates/404/NotingFound";
import { ServerError } from "@/components/pageTemplates/500/ServerError";
import { Unauthenticated } from "@/components/pageTemplates/Unauthenticated/Unauthenticated";

export const NotFound = ({ state }: { state?: string }) => {
 return <>{state === "404" ? <NotingFound /> : state === "500" ? <ServerError /> : state === "noUser" ? <Unauthenticated /> : <></>}</>;
};
