let store = {
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
    _subscriber() {
        console.log('Empty sub');
    },
    getState() {
        return this._state
    },
    subscribe(subscriber) {
        this._subscriber = subscriber;
    },

    dispatch(action) {
        switch(action.type) {
            case 'SEND-NEW-MESSAGE':
                const messageId = this._state.dialogsData.messages[this._state.dialogsData.messages.length - 1].id + 1;
                const sender = { id: 1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' };
                const messageText = this._state.dialogsData.newMessageValue; 
                const newMassage = {
                    id: messageId,
                    sender: sender,
                    text: messageText,
                };
                this._state.dialogsData.messages.push(newMassage);
                this._state.dialogsData.newMessageValue = '';
                this._subscriber(this);
                break;

            case 'UPDATE-NEW-MESSAGE-VALUE':
                this._state.dialogsData.newMessageValue = action.newValue;
                this._subscriber(this);
                break;

            case 'ADD-NEW-POST':
                const postId = this._state.profileData.posts[this._state.profileData.posts.length - 1].id + 1;
                const postText = this._state.profileData.newPostValue;
                const newPost = {
                    id: postId,
                    user: { id: 1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' },
                    likes: 0,
                    text: postText,
                };
                this._state.profileData.posts.push(newPost);
                this._state.profileData.newPostValue = '';
                this._subscriber(this);
                break;

            case 'UPDATE-NEW-POST-VALUE':
                this._state.profileData.newPostValue = action.newValue;
                this._subscriber(this);
                break;
        }

    },

}



window.store = store;
export default store;