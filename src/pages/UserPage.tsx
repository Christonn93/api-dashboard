import { useUserStore } from "@/hooks/store/useUserStore";

export const UserPage = () => {
 const user = useUserStore((state) => state.user);

 if (!user) return <p>Loading...</p>;

 return (
  <div>
   <h1>Welcome, {user.firstName}!</h1>
   <p>Email: {user.email}</p>
   <p>Username: {user.username}</p>
   <p>Role: {user.role || "Not set"}</p>
   <p>Location: {user.location || "Not set"}</p>
  </div>
 );
};
