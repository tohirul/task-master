// src/router/guards/require-auth.tsx
import { Navigate, Outlet } from "@tanstack/react-router";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export default function Guard() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}
