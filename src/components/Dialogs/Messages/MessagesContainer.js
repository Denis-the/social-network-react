import React from 'react';
import { sendNewMessageActionCreator, updateNewMessageValueActionCreator } from '../../../redux/dialogsReducer';
import Messages from './Messages';


const MessagesContainer = (props) => {
    const dialogsData = props.store.getState().dialogsData;
    

    const newMessageValue = dialogsData.newMessageValue;
    const messages = dialogsData.messages;
    const sendNewMessage = () => {
        const action = sendNewMessageActionCreator()
        props.store.dispatch(action);
    }
    const updateNewMessageValue = (newValue) => {
        const action = updateNewMessageValueActionCreator(newValue);
        props.store.dispatch(action);
    }

    return (
        <Messages
        messages={messages}
        newMessageValue={newMessageValue}
        sendNewMessage={sendNewMessage}
        updateNewMessageValue={updateNewMessageValue}
        />
    )
}

export default MessagesContainer;