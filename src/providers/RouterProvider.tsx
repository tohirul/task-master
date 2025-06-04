// src/providers/RouterProvider.tsx
import { RouterProvider as TanStackRouterProvider } from "@tanstack/react-router";
import { router } from "@/core/lib/routerClient";

export function RouterProvider() {
  return <TanStackRouterProvider router={router} />;
}