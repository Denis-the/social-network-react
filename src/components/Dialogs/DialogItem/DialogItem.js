import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import UserAvatar from '../../Profile/UserAvatar/UserAvatar';


const DialogItem = (props) => {
    const user = props.user;
    const path = `/dialogs/${user.id}`;
    return (
        <NavLink className={s.dialogUsers__item} to={path}>
            <UserAvatar className={s.dialogUsers__avatar} imageUrl={user.avatar}/>
            <div className={s.dialogUsers__name}>{user.name}</div>
        </NavLink>
    )
}

export default DialogItem;