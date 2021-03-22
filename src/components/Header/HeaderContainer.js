import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/authReducer';
import Header from './Header';


class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', 
        {withCredentials: true}).then( (response) => {
                if (response.data.resultCode === 1) return;
                const {id, login, email} = response.data.data;
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