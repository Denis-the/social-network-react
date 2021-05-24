import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Preloader from "../../components/common/Preloader/Preloader";

const LoginRedirectWrapper = (WrappedComponent) => {
  const RedirectComponent = ({
    isAuthRedirect,
    isFetchingRedirect,
    ...props
  }) => {
    if (isFetchingRedirect) return <Preloader />;
    if (!isFetchingRedirect && !isAuthRedirect) return <Redirect to="/login" />;
    return <WrappedComponent {...props} />;
  };

  const mapAuthToProps = (state) => ({
    isAuthRedirect: state.auth.isAuth,
    isFetchingRedirect: state.auth.isFetching,
  });

  const RedirectComponentConnected = connect(mapAuthToProps)(RedirectComponent);

  return RedirectComponentConnected;
};

export default LoginRedirectWrapper;
