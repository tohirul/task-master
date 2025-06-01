import { createFileRoute } from "@tanstack/react-router";
import Signup from "@/pages/auth/Signup";

export const Route = createFileRoute("/_auth/sign-up")({
  component: () => <Signup />,
});
