const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';
const SET_PROFILE = 'SET-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialProfileState = {

        profileInfo:  null,
        newPostValue: '',
        isFetching: false,
}


const profileReducer = (state = initialProfileState, action) => {

    switch(action.type) {
        case SET_PROFILE: {
            return {...state, profileInfo: action.profileInfo}
        };

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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

    }

    return state 
}

export const addNewPost = () => ({type:ADD_NEW_POST});
export const updateNewPostValue = (newValue) => ({
    type:UPDATE_NEW_POST_VALUE, newValue: newValue});
export const setProfile = (profileInfo) => ({
    type:SET_PROFILE,
    profileInfo,
}) 
export const toggleIsFetching = (isFetching) => ({
    type:TOGGLE_IS_FETCHING,
    isFetching
})


export default profileReducer;