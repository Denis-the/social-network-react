import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router";
import Preloader from '../../components/common/Preloader/Preloader';
import { getIsAuth, getIsFetching } from '../../redux/selectors/authSelectors';

export const useLoginRedirect = () => {
    const isAuth = useSelector(getIsAuth);
    const isFetching = useSelector(getIsFetching);
    const history = useHistory();

    if (!isFetching && !isAuth) history.push('/login')
}

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