import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const auth = useAuth;

  useEffect(() => {
    console.log("print private useeffect");
    console.log(auth);
  }, [auth]);

  return auth ? children : <Navigate to={"/logIn"} />;
};

export default PrivateRoute;
