import { createFileRoute } from "@tanstack/react-router";
import RegisterOrg from "@/pages/auth/RegisterOrg";

export const Route = createFileRoute("/_auth/register-org")({
  component: () => <RegisterOrg />,
});
