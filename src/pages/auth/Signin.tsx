import React from "react";
import { useAppStore } from "@/store/storeHooks";
import { useNavigate, useSearch } from "@tanstack/react-router";

const Signin = (): React.JSX.Element => {
  const { user, login, logout, isAuthenticated } = useAppStore();
  const search = useSearch({ strict: false });
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      id: "123",
      name: "Tohir",
      email: "tohir@example.com",
      role: "admin",
      token: "your-jwt-token",
    });

    // After login, redirect to ?redirectTo= or fallback to /dashboard
    navigate({ to: search.redirectTo });
  };

  return (
    <div>
      <h1 className="text-2xl">This is Signin page </h1>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user?.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Signin;
