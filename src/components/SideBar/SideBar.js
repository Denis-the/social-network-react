import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './SideBar.module.css';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav className={s.sideBar}>
                <div className={s.item}>
                    <NavLink to='profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink 
                    to='dialogs' activeClassName={s.active}>
                        Dialogs
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink 
                    to='news' activeClassName={s.active}>
                        News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                    to='music' activeClassName={s.active}>
                        Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink 
                    to='settings' activeClassName={s.active}>
                        Settings
                    </NavLink>
                </div>
            </nav>
        )
    }

}

export default SideBar;