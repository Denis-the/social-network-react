import React from 'react';
import s from  './Header.module.css';
import logo from './../../logo.svg';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    
    return (
        <div className='header__container'>
            <img className='header__logo' src={logo}></img>

            <div className='header__login-section'>
                { props.userId ? 
                <div>
                    {props.login}<br/>
                    <button onClick={props.logoutFromServer}>Logout</button>
                </div> 
                : <NavLink to='/login'>Login</NavLink>}
                
            </div>
        </div>
    )
}

export default Header;