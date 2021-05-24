import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useLogoutFromServerFn } from "../../hooks/loginHooks";
import { getAuthData } from "../../redux/selectors/authSelectors";
import Header from "./Header";

const HeaderContainer = () => {
  const history = useHistory();
  const logoutFromServer = useLogoutFromServerFn();
  const { email, userId, login } = useSelector(getAuthData);

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
