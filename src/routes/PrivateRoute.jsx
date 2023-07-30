import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";

const PrivateRoute = ({ children }) => {
  const { userData, userLoading } = useContext(AuthContext);
  const location = useLocation();

  if (userLoading) {
    return <h1>Loading.....</h1>;
  }
  if (!userData) {
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
