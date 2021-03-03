const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE';



 const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_NEW_MESSAGE:
            const messageId = state.dialogsData.messages[state.dialogsData.messages.length - 1].id + 1;
            const sender = { id: 1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' };
            const messageText = state.dialogsData.newMessageValue; 
            const newMassage = {
                id: messageId,
                sender: sender,
                text: messageText,
            };
            state.dialogsData.messages.push(newMassage);
            state.dialogsData.newMessageValue = '';
            break;

        case UPDATE_NEW_MESSAGE_VALUE:
            state.dialogsData.newMessageValue = action.newValue;
            break;

    }

    return state 
}

export default dialogsReducer;