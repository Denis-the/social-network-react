import React from 'react';
import { sendNewMessageActionCreator, updateNewMessageValueActionCreator } from '../../../redux/dialogsReducer';
import Messages from './Messages';
import {connect} from 'react-redux';

// classic way to create a container component

// const MessagesContainer = (props) => {
//     const dialogsData = props.store.getState().dialogsData;
    

//     const newMessageValue = dialogsData.newMessageValue;
//     const messages = dialogsData.messages;
//     const sendNewMessage = () => {
//         const action = sendNewMessageActionCreator()
//         props.store.dispatch(action);
//     }
//     const updateNewMessageValue = (newValue) => {
//         const action = updateNewMessageValueActionCreator(newValue);
//         props.store.dispatch(action);
//     }

//     return (
//         <Messages
//         messages={messages}
//         newMessageValue={newMessageValue}
//         sendNewMessage={sendNewMessage}
//         updateNewMessageValue={updateNewMessageValue}
//         />
//     )
// }


// react-redux way to create a container component

const mapStateToProps = (state) => {
    return {
        messages:state.dialogsData.messages,
        newMessageValue:state.dialogsData.newMessageValue,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: () => {
            const action = sendNewMessageActionCreator()
            dispatch(action);
        },
        updateNewMessageValue: (newValue) => {
            const action = updateNewMessageValueActionCreator(newValue);
            dispatch(action);
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;