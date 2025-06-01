import { routeTree } from "@/routeTree.gen";
import { RouterProvider as Router, createRouter } from "@tanstack/react-router";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const router = createRouter({ routeTree });

export function RouterProvider() {
  return <Router router={router} />;
}
