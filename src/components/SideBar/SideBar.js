import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {    
    return (
        <div className='sidebar-wrapper'>
            <nav className='sidebar_nav'>
                <div className='sidebar_nav-item'>
                    <NavLink to='/profile' activeClassName='active'><span className='nav-item__text'>Profile</span></NavLink>
                </div>
                <div className='sidebar_nav-item'>
                    <NavLink to='/dialogs' activeClassName='active'><span className='nav-item__text'>Dialogs</span></NavLink>
                </div>
                <div className='sidebar_nav-item'>
                    <NavLink to='/users' activeClassName='active'><span className='nav-item__text'>Users</span></NavLink>
                </div>
            </nav>
        </div>
    )
}



export default SideBar;