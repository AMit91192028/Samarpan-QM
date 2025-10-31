// PrivateRoute.jsx
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const checkAuthCookie = () => {
  const cookies = document.cookie;
  console.log("Cookies:", cookies);
  return cookies.split(";").some((cookie) =>
    cookie.trim().startsWith("token")
  );
};


const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = checkAuthCookie();

    if (!isAuthenticated) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <span>Loading...</span>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;
