import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router";


const mapAuthToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const LoginRedirectWrapper = (WrappedComponent) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />
            return <WrappedComponent {...this.props}></WrappedComponent>
        }
    }
    const RedirectComponentConnected = connect(mapAuthToProps)(RedirectComponent);
    return RedirectComponentConnected;
}

export default LoginRedirectWrapper;
