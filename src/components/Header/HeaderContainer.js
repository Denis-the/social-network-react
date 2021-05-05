import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { logoutFromServer } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    loginToServer(e) {
        this.props.history.push('/login')
        e.target.blur()
    }

    render() {
        console.log(this.props)
        return (
            <Header
            {...this.props}
            loginToServer={this.loginToServer.bind(this)}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
})

const HeaderContainerConnected = compose(
    connect(mapStateToProps, {logoutFromServer}),
    withRouter,
)(HeaderContainer)
;
export default HeaderContainerConnected;