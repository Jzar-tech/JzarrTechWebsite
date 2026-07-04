import { Navigate } from "react-router-dom";
import { getSession } from "./adminStore";

const ProtectedAdminRoute = ({ children }) => {
  const session = getSession();

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
