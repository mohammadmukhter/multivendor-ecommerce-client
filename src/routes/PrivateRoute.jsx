import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full mt-24 flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace={true}
      ></Navigate>
    );
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
