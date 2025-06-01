import { createFileRoute } from "@tanstack/react-router";
import Signin from "@/pages/auth/Signin";

export const Route = createFileRoute("/_auth/sign-in")({
  component: () => <Signin />,
});
