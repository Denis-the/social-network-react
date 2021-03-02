import React from 'react';
import s from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';
import NewMessage from './NewMessage/NewMessage';


const Messages = (props) => {
    return (
        <div className={s.dialogMessages}>
            {props.dialogsData.messages.map((message) => (
                    <MessageItem 
                    key={message.id} 
                    message={message}/>
                ))}

            <NewMessage newMessageValue={props.dialogsData.newMessageValue} dispatch={props.dispatch} />
        </div>
    )
}

export default Messages;