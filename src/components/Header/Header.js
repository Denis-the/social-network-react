import React from 'react';
import s from  './Header.module.css';
import logo from './../../logo.svg';


class Header extends React.Component {
    
    render() {
        return (
            <header className={s['header']}>
                <img className={s['site-logo']} src={logo}></img>
            </header>
        )
    }

}

export default Header;