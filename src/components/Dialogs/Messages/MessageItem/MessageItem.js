import React from 'react';
import UserAvatar from '../../../Profile/UserAvatar/UserAvatar';
import s from './MessageItem.module.css'; 


const MessageItem = (props) => {
    return (
        <div className={s.message}>
            <div className={s.message__sender}>
                <UserAvatar imageUrl={props.message.sender.avatar}></UserAvatar>
            </div>

            <div className={s.message__text}>{props.message.text}</div>
        </div>
    )
}

export default MessageItem;