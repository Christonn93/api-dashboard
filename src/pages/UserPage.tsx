import { useGetUserData } from "@/hooks/queryHooks/useGetUserData";

export const UserPage = () => {
 const userData = sessionStorage.getItem("userData");

 const userId = JSON.parse(userData || "{}")?.id;

 if (!userData) {
  return <p>No user data found!</p>;
 }

 const { data, error, isLoading } = useGetUserData(userId);

 if (isLoading) {
  return <p>Loading user data...</p>;
 }

 if (error) {
  return <p style={{ color: "red" }}>{String(error)}</p>;
 }

 if (!data) {
  return <p>No user data found!</p>;
 }

 return (
  <div>
   <h1>Welcome to the user page!</h1>
   <div>{userId}</div>
  </div>
 );
};
