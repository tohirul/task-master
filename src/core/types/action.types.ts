// action.types.ts
export const auth_action_types = {
  USER_LOGIN: "USER_LOGIN",
  USER_LOGOUT: "USER_LOGOUT",
} as const;

export type AuthActionTypes =
  (typeof auth_action_types)[keyof typeof auth_action_types];
