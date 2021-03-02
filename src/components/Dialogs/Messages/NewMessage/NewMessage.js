import React from 'react';
import s from './NewMessage.module.css';



const NewMessage = (props) => {
    
    const newMessageArea = React.createRef();
    const sendNewMessage = () => {
        const action = {
            type: 'SEND-NEW-MESSAGE',
        }
        props.dispatch(action);
    }
    const updateNewMessageValue = () => {
        const newValue = newMessageArea.current.value;
        const action = {
            type: 'UPDATE-NEW-MESSAGE-VALUE',
            newValue: newValue,
        }
        props.dispatch(action);
    }

    return (
        <div>
            <textarea ref={newMessageArea} onChange={updateNewMessageValue} value={props.newMessageValue}></textarea>
            <button onClick={sendNewMessage}>отправить</button>
        </div>

    )
}

export default NewMessage;