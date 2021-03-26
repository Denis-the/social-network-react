import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';



class LoginContainer extends React.Component {


    render () {
        return (
            <Login/>
        )
    }

}

const mapStateToProps = (state) => {
    return {

    }
}


const LoginContainerConnected = connect(mapStateToProps, {})(LoginContainer)

export default LoginContainerConnected;