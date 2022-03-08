import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = (props) => {
  const isAuth = useSelector((state) => state.user);
  const { component: Component, ...rest } = props;

  return isAuth ? (
    <Component {...rest} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

export default ProtectedRoutes;
