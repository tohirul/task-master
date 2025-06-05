// src/router/index.tsx
import { createRootRoute } from "@tanstack/react-router";

import { publicRoutes } from "@/router/routes/public";
import { privateRoutes } from "@/router/routes/private";
import { authRoutes } from "@/router/routes/auth";

export const rootRouter = createRootRoute();

export const routeTree = rootRouter.addChildren([
  ...authRoutes,
  ...publicRoutes,
  ...privateRoutes,
]);
