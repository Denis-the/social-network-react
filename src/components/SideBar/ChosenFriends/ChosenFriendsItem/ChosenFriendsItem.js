import React from 'react';
import { NavLink } from 'react-router-dom';
import UserAvatar from '../../../Profile/UserAvatar/UserAvatar';
import s from './ChosenFriendsItem.module.css'


const ChosenFriendsItem = (props) => {
    const user = props.user;

    return (
        <NavLink className={s.user} to={`/dialogs/${user.id}`}>
                <UserAvatar className={s.userAvatar} imageUrl={user.avatar}></UserAvatar>
                <div className={s.userName}>{user.name}</div>
        </NavLink>
    )
}

export default ChosenFriendsItem;