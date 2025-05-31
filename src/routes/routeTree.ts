import { lazy } from "react";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { AppRoute, RootRoute } from "./routes";
const NotFound = lazy(() => import("@/pages/gen/NotFound"));
const notFoundRoute = AppRoute({
  getParentRoute: () => RootRoute,
  path: "*",
  component: NotFound,
});

export const routeTree = RootRoute.addChildren([
  ...PublicRoutes,
  ...PrivateRoutes,
  notFoundRoute,
]);
