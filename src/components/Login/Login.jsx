import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { getIsAuth, } from "../../redux/selectors/authSelectors";
import LoginForm from "../forms/LoginForm";

const Login = () => {
  const isAuth = useSelector(getIsAuth);
  if (isAuth) return <Redirect to="/profile" />;
  return <LoginForm />;
};

export default Login;
