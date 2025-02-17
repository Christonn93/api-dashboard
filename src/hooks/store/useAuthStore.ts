import { create } from "zustand";

interface User {
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
 token?: string;
 refreshToken?: string;
}

interface AuthState {
 user: User | null;
 setUser: (user: User) => void;
 logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
 user: null,
 setUser: (user) => set({ user }),
 logout: () => set({ user: null }),
}));
