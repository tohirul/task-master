// routes/types.ts
export type RouteType = "public" | "private";

export interface RouteInfo {
  path: string;
  element: React.ReactNode;
  routeType: RouteType;
  children?: RouteInfo[];
}
export interface RouteConfig {
  routes: RouteInfo[];
  isAuthenticated: boolean;
}
