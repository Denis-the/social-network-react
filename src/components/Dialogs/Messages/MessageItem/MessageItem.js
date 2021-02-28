import React from 'react';
import s from './MessageItem.module.css'; 


const MessageItem = (props) => {
    return (
        <div className={s.dialogMessages__item}>
            {props.message.sender.name}: {props.message.text}
        </div>
    )
}

export default MessageItem;