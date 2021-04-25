import React from 'react';
import { NavLink } from 'react-router-dom';
import ChosenFriends from './ChosenFriends/ChosenFriends';

const SideBar = (props) => {
    const chosenFriendsList = props.store.getState().sideBarData.chosenFriends;
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

            <ChosenFriends friendsList={chosenFriendsList} />
        </div>
    )
}



export default SideBar;