import React from "react";
import logo from "../../logo.svg";
import { ButtonUI } from "../common/UI-components/UIElems";

const Header = React.memo(({ userId, login, email, logoutFromServer, loginToServer }) => (
  <div className="header__container ">
    <img className="header__logo" alt="logo" src={logo} />
    <div className="header__auth-section">
      {userId ? (
        <>
          <span className="auth__name">
            {login} ({email})
          </span>
          <ButtonUI
            className="p-component p-button-sm p-button-secondary p-shadow-3 p-m-1"
            onClick={logoutFromServer}
          >
            Logout
          </ButtonUI>
        </>
      ) : (
        <ButtonUI
          className="p-component p-button-sm p-button-secondary p-shadow-3"
          onClick={loginToServer}
        >
          Login
        </ButtonUI>
      )}
    </div>
  </div>
));

Header.displayName = 'Header';


export default Header;
