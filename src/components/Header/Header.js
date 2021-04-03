import React from 'react';
import s from  './Header.module.css';
import logo from './../../logo.svg';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    
    return (
        <header className={s.header}>
            <img className={s.siteLogo} src={logo}></img>

            <div className={s.loginBlock}>
                { props.userId ? 
                <div>
                    {props.login}<br/>
                    <button onClick={props.logoutFromServer}>Logout</button>
                </div> 
                : <NavLink to='/login'>Login</NavLink>}
                
            </div>
        </header>
    )
}

export default Header;