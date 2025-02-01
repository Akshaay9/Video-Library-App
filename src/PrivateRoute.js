// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useLoginContext } from "./Context/loginRegistrationContext/loginRegistrationContext";

const PrivateRoute = ({ element, ...rest }) => {
  const {
    state: { userInfo },
  } = useLoginContext();

  // Wrap the Route in PrivateRoute and pass the element to the render logic
  return (
    <Route
      {...rest}
      element={userInfo?.token ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
