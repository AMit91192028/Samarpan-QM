// OTPProtectedRoute.jsx
import { useLocation, Navigate } from "react-router-dom";

const OTPProtectedRoute = ({ children }) => {
  const location = useLocation();

  // If state is not passed, block access
  if (!location.state || !location.state.email || !location.state.role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default OTPProtectedRoute;
