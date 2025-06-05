// src/store/slices/authSlice.ts

import { type StateCreator } from "zustand";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "employee";
  token: string;
}

export interface AuthSlice {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  user: null,
  isAuthenticated: false,

  login: (user) => {
    localStorage.setItem("token", user.token);
    set({ user, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, isAuthenticated: false });
  },
});
