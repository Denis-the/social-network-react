import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authHooks, authSelectors } from "../../state/ducks/auth";
import Header from "./Header";

const { useLogoutFromServerFn } = authHooks;

const HeaderContainer = () => {
  const history = useHistory();
  const logoutFromServer = useLogoutFromServerFn();
  const { email, userId, login } = useSelector(authSelectors.getAuthData);

  
  const loginToServer = (e) => {
    history.push("/login");
    e.target.blur();
  };


  return (
    <Header
      email={email}
      userId={userId}
      login={login}
      logoutFromServer={logoutFromServer}
      loginToServer={loginToServer}
    />
  );
};

export default HeaderContainer;
