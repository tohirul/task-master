import { AuthProvider } from "@/providers/AuthProvider";

import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: () => (
    <AuthProvider>
      <DashboardLayout />
    </AuthProvider>
  ),
});

function DashboardLayout() {
  // Select auth state from store

  return (
    <div>
      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
