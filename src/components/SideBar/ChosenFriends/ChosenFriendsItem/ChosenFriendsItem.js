import React from 'react';
import UserAvatar from '../../../Profile/UserAvatar/UserAvatar';
import s from './ChosenFriendsItem.module.css'


const ChosenFriendsItem = (props) => {
    const user = props.user;

    return (
        <div className={s.user}>
            <UserAvatar className={s.userAvatar} imageUrl={user.avatar}></UserAvatar>
            <div className={s.userName}>{user.name}</div>
        </div>
    )
}

export default ChosenFriendsItem;