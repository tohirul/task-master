// routes/PublicRoutes.tsx
import { Navigate, Outlet } from "react-router-dom";

interface PublicRoutesProps {
  isAuthenticated: boolean;
}

const PublicRoutes: React.FC<PublicRoutesProps> = ({ isAuthenticated }) => {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoutes;
