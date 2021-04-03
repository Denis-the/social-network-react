import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import Preloader from '../../components/common/Preloader/Preloader';

const LoginRedirectWrapper = (WrappedComponent) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isFetching) return <Preloader/>
            else if (!this.props.isFetching && !this.props.isAuth) return <Redirect to="/login" />
            else return <WrappedComponent {...this.props}/>     
        }
    }

    const mapAuthToProps = (state) => ({
        isAuth: state.auth.isAuth,
        isFetching:state.auth.isFetching,
    })

    const RedirectComponentConnected = connect(mapAuthToProps)(RedirectComponent);
    return RedirectComponentConnected;
}

export default LoginRedirectWrapper;
