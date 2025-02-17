import { create } from "zustand";

type User = {
 id: string;
 email: string;
 username: string;
 firstName: string;
 lastName: string;
 age?: number | null;
 location?: string | null;
 role?: string | null;
 work?: string | null;
 contactInfo?: string | null;
 token: string;
 refreshToken: string;
 tokenExpiration: string;
 refreshTokenExpiration: string;
};

type UserStore = {
 user: User | null;
 setUser: (userData: User) => void;
 clearUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
 user: null,

 setUser: (userData) => {
  set({ user: userData });
  localStorage.setItem("user", JSON.stringify(userData));
 },

 clearUser: () => {
  set({ user: null });
  localStorage.removeItem("user");
 },
}));
