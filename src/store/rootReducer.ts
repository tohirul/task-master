import type { StoreState, StoreAction } from "@/core/types/store.types";
import { authReducer } from "./reducers/authReducer";

export const rootReducer = (
  state: StoreState,
  action: StoreAction
): StoreState => {
  return {
    ...state,
    auth: authReducer(state.auth, action),
    // Add other reducers here (e.g., userReducer: userReducer(state.user, action))
  };
};
