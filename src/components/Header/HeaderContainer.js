import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logoutFromServer } from '../../redux/authReducer';
import Header from './Header';

class HeaderAPIContainer extends React.Component {
    render() {
        return (
            <Header
            {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
})

const HeaderContainer = connect(mapStateToProps, {getAuthUserData, logoutFromServer})(HeaderAPIContainer);
export default HeaderContainer;