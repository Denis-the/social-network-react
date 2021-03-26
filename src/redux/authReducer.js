import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

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
    }
    return state;
}

// action creators
export const setAuthMeProfileData = (userId, login, email) => {
    return {
    type: SET_USER_DATA, 
    userId, 
    login, 
    email,
    isAuth:true
}}


// thunks
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe().then( (data) => {
                if (data.resultCode === 1) throw new Error('Already authorized');
                const {id, login, email} = data.data;
                dispatch(setAuthMeProfileData(id, login, email));
            }
        )
    }
}



export default authReducer;