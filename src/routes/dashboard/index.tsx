import Dashboard from "@/pages/gen/Dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: () => <Dashboard />,
});
