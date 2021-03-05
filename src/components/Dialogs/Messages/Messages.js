import React from 'react';
import s from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';
import NewMessage from './NewMessage/NewMessage';


const Messages = (props) => {

    const messagesJSX = props.messages.map((message) => (
        <MessageItem 
        key={message.id} 
        message={message}
        />
    ))

    return (
        <div className={s.dialogMessages}>
            {messagesJSX}

            <NewMessage 
            updateNewMessageValue={props.updateNewMessageValue}
            sendNewMessage={props.sendNewMessage}
            newMessageValue={props.newMessageValue} 
            />
        </div>
    )
}

export default Messages;