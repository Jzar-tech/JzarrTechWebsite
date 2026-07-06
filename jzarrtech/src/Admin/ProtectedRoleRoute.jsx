import { Navigate } from "react-router-dom";
import { getSession } from "./adminStore";

const getHomePath = (role) =>
  role === "Manager"
    ? "/manager/dashboard"
    : role === "Agent"
      ? "/agent/dashboard"
      : "/admin/dashboard";

const ProtectedRoleRoute = ({
  children,
  allowedRoles,
}) => {
  const session = getSession();

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  if (
    Array.isArray(allowedRoles) &&
    allowedRoles.length > 0 &&
    !allowedRoles.includes(session.role)
  ) {
    return <Navigate to={getHomePath(session.role)} replace />;
  }

  return children;
};

export default ProtectedRoleRoute;
