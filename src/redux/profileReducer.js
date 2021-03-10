const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';


const initialProfileState = {
        posts: [
            { id: 1, user: {id:1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' }, likes: 4, text: 'Hey, why nobody love me?' },
            { id: 2, user: {id:1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' }, likes: 10, text: "It's our new program! Hey" },
            { id: 3, user: {id:1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' }, likes: 10, text: "It's our new program! Hey111" },
        ],
        newPostValue: '',
}


const profileReducer = (state = initialProfileState, action) => {

    switch(action.type) {
        case ADD_NEW_POST: {
            if (!state.newPostValue) break;
            const postId = state.posts[state.posts.length - 1].id + 1;
            const postText = state.newPostValue;
            const newPost = {
                id: postId,
                user: { id: 1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' },
                likes: 0,
                text: postText,
            };
            
            const stateCopy = { 
                ...state,
                newPostValue: '',   
                posts: [...state.posts, newPost],
            
            };

            return stateCopy
            
        }
            
        case UPDATE_NEW_POST_VALUE: {
            const stateCopy = Object.assign({}, state);
            stateCopy.newPostValue = action.newValue;
            return stateCopy
        }
    }

    return state 
}

export const addNewPostActionCreator = () => ({type:ADD_NEW_POST});
export const updateNewPostValueActionCreator = (newValue) => ({
    type:UPDATE_NEW_POST_VALUE, newValue: newValue});




export default profileReducer;