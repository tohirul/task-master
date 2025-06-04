// src/router/routes/private.tsx
import { createRoute } from "@tanstack/react-router";

import Dashboard from "@/pages/Dashboard";

import { rootRouter } from "..";
import Settings from "@/pages/Dashboard/Settings";
import DashboardLayout from "@/pages/Dashboard/layout";
import Tasks from "@/pages/user/Tasks";
import { AuthProvider } from "@/providers/AuthProvider";

const dashboardRoute = createRoute({
  getParentRoute: () => rootRouter,
  path: "dashboard",
  component: () => (
    <AuthProvider>
      <DashboardLayout />
    </AuthProvider>
  ),
});

const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: Dashboard,
});

const settingsRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "settings",
  component: Settings,
});

const tasksRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "tasks",
  component: Tasks,
});

export const privateRoutes = [
  dashboardRoute.addChildren([dashboardIndexRoute, settingsRoute, tasksRoute]),
];
