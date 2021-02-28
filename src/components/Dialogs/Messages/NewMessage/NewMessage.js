import React from 'react';
import s from './NewMessage.module.css';



const NewMessage = (props) => {
    const newMessageArea = React.createRef();
    const sendNewMessage = () => {
        props.newMessageHandler.handler.sendMessage();
    }
    const handleMessageChange = () => {
        const newValue = newMessageArea.current.value;
        props.newMessageHandler.handler.handleChange(newValue);
    }

    return (
        <div>
            <textarea ref={newMessageArea} onChange={handleMessageChange} value={props.newMessageHandler.value}></textarea>
            <button onClick={sendNewMessage}>отправить</button>
        </div>

    )
}

export default NewMessage;