import { profileAPI } from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';
const SET_PROFILE = 'SET-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STATUS = 'SET-STATUS';

const initialProfileState = {
        profileInfo:  null,
        status: null,
        newPostValue: '',
        isFetching: false,
        posts:[],
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
        case SET_STATUS: {
            return {...state, status:action.newStatus}
        }

    }

    return state 
}

// AC
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
export const setStatus = (newStatus) => ({
    type:SET_STATUS,
    newStatus
})

// thunks
export const getProfile = (userId) => {
    return (dispatch, getState) => {
        dispatch(toggleIsFetching(true));

        profileAPI.getProfileData(userId).then((data) => {
                dispatch(toggleIsFetching(false));
                dispatch(setProfile(data)); 
            },
            (error) => {
                dispatch(toggleIsFetching(false));
            }
            )
    }
}

export const changeStatus = (newStatus) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        // validateStatus (max length = 300)
        profileAPI.setStatus(newStatus).then((data) => {
            dispatch(toggleIsFetching(false));
            if (data.resultCode !== 0) return;
            dispatch(setStatus(newStatus));
        })

    } 
}

export const getStatus = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        profileAPI.getStatus(userId).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setStatus(data));
        })
    }
}

export default profileReducer;