import type { StoreState } from "@/core/types/store.types";

export const initialState: StoreState = {
  auth: {
    isAuthenticated: false,
    token: null,
  },
  user: {
    id: "",
    name: "",
    email: "",
  },
};
