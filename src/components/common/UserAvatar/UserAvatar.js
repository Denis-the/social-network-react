import React from 'react';
import s from './UserAvatar.module.css'
import avatarPlaceholder from '../../../assets/images/User_avatar_placeholder.jpg'


const UserAvatar = (props) => {
    return (
        <div
            className={s.avatarContainer}
        >
            <img
                src={(props.imageUrl ? props.imageUrl : avatarPlaceholder )}
                className={s.avatarImg}
            />
        </div>
    )
}



export default UserAvatar;