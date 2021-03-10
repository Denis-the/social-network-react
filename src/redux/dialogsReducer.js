const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE';

const initialDialogsState = {
    dialogs: [
        {id:230, name: 'Diana',  avatar:'https://icdn.lenta.ru/images/2020/11/13/12/20201113124154722/square_320_a0b77ad44eebfad90a16cb563380a3ba.jpg'},
        {id:231, name: 'Vladimir',  avatar:'https://globalmsk.ru/usr/person/7413-big-15048643870.jpg'},
        {id:232, name: 'Thomas',  avatar:'https://cdn-img.fimfiction.net/group/orj2-1563356689-203238-256'},
    ],
    messages: [
        {id: 1, sender: {id:231, name: 'Vladimir',  avatar:'https://globalmsk.ru/usr/person/7413-big-15048643870.jpg'}, text:'Как Дела',},
        {id: 2, sender: {id:1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' }, text: 'Какое-то длинное соообщение, не пугайтесь, Какое-то длинное соообщение, не пугайтесь, Какое-то длинное соообщение, не пугайтесь Какое-то длинное соообщение, не пугайтесь Какое-то длинное соообщение, не пугайтесьКакое-то длинное соообщение, не пугайтесь' },
    ],
    newMessageValue: '',
}


 const dialogsReducer = (state=initialDialogsState, action) => {
    
    switch(action.type) {
        case SEND_NEW_MESSAGE: {
            const messageId = state.messages[state.messages.length - 1].id + 1;
            const sender = { id: 1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' };
            const messageText = state.newMessageValue; 
            const newMassage = {
                id: messageId,
                sender: sender,
                text: messageText,
            };
            
            const stateCopy = {
                ...state,
                newMessageValue: '',
                messages: [...state.messages, newMassage]
            };

            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_VALUE: {
            const stateCopy = {
                ...state,
                newMessageValue: action.newValue
            };

            return stateCopy;
        }
    }

    return state 
}

export const sendNewMessageActionCreator = () => ({type:SEND_NEW_MESSAGE});
export const updateNewMessageValueActionCreator = (newValue) => ({
    type:UPDATE_NEW_MESSAGE_VALUE, newValue: newValue});


export default dialogsReducer;