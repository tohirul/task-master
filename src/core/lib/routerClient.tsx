// src/lib/routerClient.ts or RouterProvider.tsx

// import { routeTree } from "@/routeTree.gen";z
import { createRouter } from "@tanstack/react-router";

export const router = createRouter({
  defaultPreload: "intent",
  defaultPendingComponent: () => null,
  defaultErrorComponent: () => <h1>Something went wrong!!!</h1>,
});

// 👇 AFTER defining router
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
