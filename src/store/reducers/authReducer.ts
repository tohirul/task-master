import { auth_action_types } from "@/core/types/action.types";
import type { AuthState } from "@/core/types/auth.types";
import type { StoreAction } from "@/core/types/store.types";

export const authReducer = (
  state: AuthState,
  action: StoreAction
): AuthState => {
  switch (action.type) {
    case auth_action_types.USER_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };

    case auth_action_types.USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };

    default:
      return state;
  }
};
