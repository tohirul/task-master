import { lazyRouteComponent } from "@tanstack/react-router";
import { AppRoute, RootRoute } from "./routes";

export const PublicRoutes = [
  AppRoute({
    getParentRoute: () => RootRoute,
    path: "/",
    component: lazyRouteComponent(() => import("@/pages/gen/Home")),
  }),
  AppRoute({
    getParentRoute: () => RootRoute,
    path: "/sign-in",
    component: lazyRouteComponent(() => import("@/pages/auth/Signin")),
  }),
  AppRoute({
    getParentRoute: () => RootRoute,
    path: "/sign-up",
    component: lazyRouteComponent(() => import("@/pages/auth/Signup")),
  }),
];
