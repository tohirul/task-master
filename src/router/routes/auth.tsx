// src/router/routes/auth.tsx

import { createRoute } from "@tanstack/react-router";
import { rootRouter } from "..";
import AuthLayout from "@/pages/auth/layout";
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/Signup";
import RegisterOrg from "@/pages/auth/RegisterOrg";

const authRoute = createRoute({
  getParentRoute: () => rootRouter,
  id: "pathlessAuthLayout",
  component: () => <AuthLayout />,
});

const signInRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "sign-in",
  component: Signin,
});

const signUpRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "sign-up",
  component: Signup,
});

const registerOrg = createRoute({
  getParentRoute: () => authRoute,
  path: "register-org",
  component: RegisterOrg,
});

authRoute.addChildren([signInRoute, signUpRoute, registerOrg]);

export const authRoutes = [authRoute];
