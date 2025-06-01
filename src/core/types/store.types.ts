import type { auth_action_types } from "@/core/types/action.types";
import type { AuthState, User } from "@/core/types/auth.types";

export interface StoreState {
  auth: AuthState;
  user: User | null;
}

export type StoreAction =
  | { type: typeof auth_action_types.USER_LOGIN; payload: { token: string } }
  | { type: typeof auth_action_types.USER_LOGOUT };

export interface Store {
  state: StoreState;
  getValue: <T>(selector: (state: StoreState) => T) => T;
  dispatch: (action: StoreAction) => void;
}
