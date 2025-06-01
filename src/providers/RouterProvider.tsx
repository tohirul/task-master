import { routeTree } from "@/routeTree.gen";
import { RouterProvider as Router, createRouter } from "@tanstack/react-router";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const router = createRouter({
  routeTree,
  defaultPreload: "intent",

  defaultPendingComponent: () => null,
  defaultErrorComponent: () => <h1>Something went wrong!!!</h1>,
});

export function RouterProvider() {
  return <Router router={router} />;
}
