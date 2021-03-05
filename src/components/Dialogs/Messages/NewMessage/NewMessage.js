import React from 'react';

import s from './NewMessage.module.css';



const NewMessage = (props) => {

    const onSendNewMessage = () => {
        props.sendNewMessage();
    }
    const onUpdateNewMessageValue = (e) => {
        const newValue = e.target.value;
        props.updateNewMessageValue(newValue)
    }

    return (
        <div>
            <textarea onChange={onUpdateNewMessageValue} value={props.newMessageValue}></textarea>
            <button onClick={onSendNewMessage}>отправить</button>
        </div>

    )
}

export default NewMessage;