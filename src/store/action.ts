import { auth_action_types } from "@/core/types/action.types";

export const loginUser = () => ({
  type: auth_action_types.USER_LOGIN,
  payload: {
    token: "sample_token",
  },
});

export const logoutUser = () => ({
  type: auth_action_types.USER_LOGOUT,
});
