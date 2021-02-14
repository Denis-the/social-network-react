import React from 'react'

import logo from './../logo.svg';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header className='app-header'>
                <img className='app-header__site-logo' src={logo}></img>
            </header>
        )
    }

}

export default Header;