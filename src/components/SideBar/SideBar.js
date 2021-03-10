import React from 'react';
import { NavLink } from 'react-router-dom';
import ChosenFriends from './ChosenFriends/ChosenFriends';
import s from './SideBar.module.css';

const SideBar = (props) => {
    const chosenFriendsList = props.store.getState().sideBarData.chosenFriends;
    return (
        <div className={s.sideBar}>
            <nav >
                <div className={s.item}>
                    <NavLink
                        to='/profile'
                        activeClassName={s.active}>Profile
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/dialogs'
                        activeClassName={s.active}>
                        Dialogs
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/users'
                        activeClassName={s.active}>
                        Users
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/news'
                        activeClassName={s.active}>
                        News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/music'
                        activeClassName={s.active}>
                        Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/settings'
                        activeClassName={s.active}>
                        Settings
                    </NavLink>
                </div>
            </nav>

            <ChosenFriends friendsList={chosenFriendsList} />
        </div>
    )
}



export default SideBar;