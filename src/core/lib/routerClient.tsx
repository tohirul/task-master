// src/lib/routerClient.ts

import { routeTree } from "@/router";
import { createRouter } from "@tanstack/react-router";

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}
