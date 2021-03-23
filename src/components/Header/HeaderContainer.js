import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { setUserData } from '../../redux/authReducer';
import Header from './Header';



class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe().then( (data) => {
                if (data.resultCode === 1) return;
                const {id, login, email} = data.data;
                this.props.setUserData(id, login, email);
            }
        )
    }



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



const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPIContainer);
export default HeaderContainer;