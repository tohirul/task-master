// src/router/routes/public.tsx
import { createRoute } from "@tanstack/react-router";

import Home from "@/pages/gen/Home";
import About from "@/pages/gen/About";
// import Pricing from "@/pages/Pricing";
import Services from "@/pages/gen/Services";
import { rootRouter } from "..";
import PublicLayout from "@/pages/gen/layout";

const publicRoute = createRoute({
  getParentRoute: () => rootRouter,
  id: "pathlessLayout",
  component: () => <PublicLayout />,
});

const homeRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: "/",
  component: Home,
});

const about = createRoute({
  getParentRoute: () => publicRoute,
  path: "about",
  component: About,
});

const services = createRoute({
  getParentRoute: () => publicRoute,
  path: "services",
  component: Services,
});

publicRoute.addChildren([homeRoute, about, services]);

export const publicRoutes = [publicRoute];
