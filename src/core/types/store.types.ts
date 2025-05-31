import type { auth_action_types } from "./action.types";
import type { AuthState, User } from "./auth.types";

export interface StoreState {
  auth: AuthState;
  user: User;
}

export type StoreAction =
  | { type: typeof auth_action_types.USER_LOGIN; payload: { token: string } }
  | { type: typeof auth_action_types.USER_LOGOUT };

export type Action = {
  type: string;
  payload?: unknown;
};

export interface Store {
  state: StoreState;
  getValue: <T>(selector: (state: StoreState) => T) => T;
  dispatch: (action: StoreAction) => void;
}
