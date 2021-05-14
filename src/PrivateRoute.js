import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useLoginContext } from "./Context/loginRegistrationContext/loginRegistrationContext";

function PrivateRoute({ path, ...props }) {
  const {
    state: { userInfo },
  } = useLoginContext();

  console.log(props);

  return userInfo.token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
export default PrivateRoute;
