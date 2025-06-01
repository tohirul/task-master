// /components/AuthProvider.tsx
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "@tanstack/react-router";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
};
