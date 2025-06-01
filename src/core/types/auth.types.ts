export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}
