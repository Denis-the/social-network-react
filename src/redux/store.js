import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";


const store = {
    _state: {
        dialogsData: {
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
        },
    
        profileData: {
            posts: [
                { id: 1, user: {id:1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' }, likes: 4, text: 'Hey, why nobody love me?' },
                { id: 2, user: {id:1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' }, likes: 10, text: "It's our new program! Hey" },
                { id: 3, user: {id:1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' }, likes: 10, text: "It's our new program! Hey111" },
            ],
            newPostValue: '',
        },
    
        sideBarData: {
            chosenFriends: [
                {id:230, name: 'Diana',  avatar:'https://icdn.lenta.ru/images/2020/11/13/12/20201113124154722/square_320_a0b77ad44eebfad90a16cb563380a3ba.jpg'},
                {id:231, name: 'Vladimir',  avatar:'https://globalmsk.ru/usr/person/7413-big-15048643870.jpg'},
                {id:232, name: 'Thomas',  avatar:'https://cdn-img.fimfiction.net/group/orj2-1563356689-203238-256'},
                {id:233, name: 'Thomas',  avatar:'https://cdn-img.fimfiction.net/group/orj2-1563356689-203238-256'},
            ]
        }
    },
    _callSubscriber() {
        console.log('Empty sub');
    },
    getState() {
        return this._state
    },
    subscribe(subscriber) {
        this._callSubscriber = subscriber;
    },

    dispatch(action) {

        this._state =  profileReducer(this._state, action);
        this._state = dialogsReducer(this._state, action);
        this._state = sideBarReducer(this._state, action);
        this._callSubscriber(this);

    }
}



window.store = store;
export default store;