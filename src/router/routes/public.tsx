// src/router/routes/public.tsx
import { createRoute } from "@tanstack/react-router";

import Home from "@/pages/gen/Home";
import About from "@/pages/gen/About";
// import Pricing from "@/pages/Pricing";
import Services from "@/pages/gen/Services";
import { rootRouter } from "..";

export const publicRoutes = [
  createRoute({
    getParentRoute: () => rootRouter,
    path: "/",
    component: Home,
  }),
  createRoute({
    getParentRoute: () => rootRouter,
    path: "about",
    component: About,
  }),

  createRoute({
    getParentRoute: () => rootRouter,
    path: "services",
    component: Services,
  }),
];
