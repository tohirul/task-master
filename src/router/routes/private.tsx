// src/router/routes/private.tsx
import { createRoute, redirect } from "@tanstack/react-router";

import Dashboard from "@/pages/Dashboard";

import { rootRouter } from "..";
import Settings from "@/pages/Dashboard/Settings";
import DashboardLayout from "@/pages/Dashboard/layout";
import Tasks from "@/pages/user/Tasks";
import { checkAuth } from "@/core/utils/checkAuth";

const dashboardRoutes = createRoute({
  getParentRoute: () => rootRouter,
  path: "dashboard",
  beforeLoad: async ({ location }) => {
    try {
      checkAuth();
    } catch {
      throw redirect({
        to: "/sign-in",
        search: { redirectTo: location.pathname },
      });
    }
  },
  component: () => <DashboardLayout />,
});

const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardRoutes,
  path: "/",
  component: Dashboard,
});

const settingsRoute = createRoute({
  getParentRoute: () => dashboardRoutes,
  path: "settings",
  component: Settings,
});

const tasksRoute = createRoute({
  getParentRoute: () => dashboardRoutes,
  path: "tasks",
  component: Tasks,
});
dashboardRoutes.addChildren([dashboardIndexRoute, settingsRoute, tasksRoute]);

export const privateRoutes = [dashboardRoutes];
