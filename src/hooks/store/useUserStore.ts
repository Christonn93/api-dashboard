import { create } from "zustand";

type User = {
 id: string;
 email: string;
 username: string;
 firstName: string;
 lastName: string;
 age?: number;
 location?: string;
 role?: string;
 work?: string;
 contactInfo?: string;
 token: string;
 refreshToken: string;
};

type UserStore = {
 user: User | null;
 setUser: (userData: User) => void;
 logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
 user: null,
 setUser: (userData) => set({ user: userData }),
 logout: () => set({ user: null }),
}));
