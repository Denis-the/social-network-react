import React from 'react';
import { Redirect } from "react-router";

const LoginRedirectWrapper = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />
            return <WrappedComponent {...this.props}></WrappedComponent>
        }
    }
}

export default LoginRedirectWrapper;
