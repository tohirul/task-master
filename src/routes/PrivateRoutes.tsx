import { lazyRouteComponent } from "@tanstack/react-router";
import { AppRoute, RootRoute } from "./routes";
const Signup = lazyRouteComponent(() => import("@/pages/auth/Signup"));

const isAuthenticated = () => !!localStorage.getItem("token");
export const PrivateRoutes = [
  AppRoute({
    getParentRoute: () => RootRoute,
    path: "/dashboard",
    loader: async () => {
      if (!isAuthenticated()) {
        throw new Error("Unauthorized");
      }
      return { user: { name: "Tohir" } };
    },
    component: lazyRouteComponent(() => import("@/pages/gen/Dashboard")),
    errorComponent: () => <Signup />,
  }),
];
