import React from 'react';
import logo from './../../logo.svg';
import { NavLink } from 'react-router-dom';
import {ButtonUI} from '../common/UI-components/UIElems'

const Header = ({userId, login, email, logoutFromServer, loginToServer}) => {
    
    return (
        <div className='header__container '>
            <img className='header__logo' src={logo}></img>

            <div className='header__auth-section'>
                    { userId ? 
                    <>
                    <span className='auth__name'>{login}</span>
                        <ButtonUI className='p-component p-button-sm p-button-secondary p-shadow-3 p-m-1' 
                            onClick={logoutFromServer}>Logout</ButtonUI>
                    </>
                    
                    :   <ButtonUI className='p-component p-button-sm p-button-secondary p-shadow-3' 
                    onClick={loginToServer}>Login</ButtonUI>
                    }
            </div>
        </div>
    )
}

export default Header;