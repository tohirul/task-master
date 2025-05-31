// src/router.tsx
import { createRootRoute, createRoute } from "@tanstack/react-router";
import RootComponent from "./__root";

export const RootRoute = createRootRoute({
  component: () => <RootComponent />,
});

export const AppRoute = createRoute;
