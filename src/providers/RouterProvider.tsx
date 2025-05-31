import { router } from "@/routes/";
import { RouterProvider as Router } from "@tanstack/react-router";

export function RouterProvider() {
  return <Router router={router} />;
}
