import React from 'react';
import { sendNewMessageActionCreator, updateNewMessageValueActionCreator } from '../../../../redux/state';
import s from './NewMessage.module.css';



const NewMessage = (props) => {
    
    const sendNewMessage = () => {
        const action = sendNewMessageActionCreator()
        props.dispatch(action);
    }
    const updateNewMessageValue = (e) => {
        const newValue = e.target.value;
        const action = updateNewMessageValueActionCreator(newValue);
        props.dispatch(action);
    }

    return (
        <div>
            <textarea onChange={updateNewMessageValue} value={props.newMessageValue}></textarea>
            <button onClick={sendNewMessage}>отправить</button>
        </div>

    )
}

export default NewMessage;