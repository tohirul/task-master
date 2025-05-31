// routes/index.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import type { RouteInfo } from "@/core/types/route.types";
import routes from "./routes";

// Replace this with your actual auth state from context or Redux
const isAuthenticated = Boolean(localStorage.getItem("token"));

// Recursive route renderer
const renderRoutes = (routes: RouteInfo[], type: "public" | "private") => {
  return (
    <Route
      element={
        type === "private" ? (
          <PrivateRoutes isAuthenticated={isAuthenticated} />
        ) : (
          <PublicRoutes isAuthenticated={isAuthenticated} />
        )
      }
    >
      {routes.map(({ path, element, children }) => (
        <Route key={path} path={path} element={element}>
          {children && renderRoutes(children, type)}
        </Route>
      ))}
    </Route>
  );
};

const AppRoutes = () => {
  const publicRoutes = routes.filter((route) => route.routeType === "public");
  const privateRoutes = routes.filter((route) => route.routeType === "private");

  return (
    <Router>
      <Routes>
        {renderRoutes(publicRoutes, "public")}
        {renderRoutes(privateRoutes, "private")}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
