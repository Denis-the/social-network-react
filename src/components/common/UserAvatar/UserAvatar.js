import React from 'react';
import s from './UserAvatar.module.css'
import avatarPlaceholder from '../../../assets/images/User_avatar_placeholder.jpg'


const UserAvatar = (props) => <img src={props.imageUrl || avatarPlaceholder} className={s.avatarImg}/>

export default UserAvatar;