// src/store/index.ts

import { create } from "zustand";
import { type AuthSlice, createAuthSlice } from "./slices/authSlices";

type AppState = AuthSlice; // Extend this with `& OtherSlice` as needed

export const useStore = create<AppState>()((...args) => ({
  ...createAuthSlice(...args),
}));
