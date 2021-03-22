const SET_USER_DATA = 'SET-USER-DATA';
const CLEAR_USER_DATA = 'CLEAR-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
    isFetching: false,
    isAuth: false,
    userId:null,
    login:null,
    email:null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.userId,
                login: action.login,
                email: action.email,
                isAuth: action.isAuth
            }
        }
        case CLEAR_USER_DATA: {
            return {
                ...state,
                userId: null,
                login: null,
                email: null,
            }
        }
    }
    return state;
}

export const setUserData = (userId, login, email) => {
    return {
    type: SET_USER_DATA, 
    userId, 
    login, 
    email,
    isAuth:true
}}




export default authReducer;