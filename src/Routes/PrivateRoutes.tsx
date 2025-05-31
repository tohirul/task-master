// routes/PrivateRoutes.tsx
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRoutesProps {
  isAuthenticated: boolean;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
