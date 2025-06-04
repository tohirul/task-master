// /components/AuthProvider.tsx

import { Navigate } from "@tanstack/react-router";
const isAuthenticated = () => {
  const res = localStorage.getItem("token");

  console.log(res);
  return false;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  } else return <>{children}</>;
};
