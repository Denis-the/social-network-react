import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { authSelectors } from "../../state/ducks/auth";
import LoginForm from "../forms/LoginForm.tsx";

const { getIsAuth } = authSelectors

const Login = () => {
  const isAuth = useSelector(getIsAuth);
  if (isAuth) return <Redirect to="/profile" />;
  return <LoginForm />;
};

export default Login;
