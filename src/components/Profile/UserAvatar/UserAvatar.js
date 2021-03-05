import React from 'react';
import s from './UserAvatar.module.css'


const UserAvatar = (props) => {
    return (
        <div
            className={s.avatarContainer}
        >
            <img
                src={props.imageUrl}
                className={s.avatarImg}
            />
        </div>
    )
}



export default UserAvatar;