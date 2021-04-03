import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
    isFetching: false,
    isAuth: false,
    userId: null,
    login: null,
    email: null,
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
    }
    return state;
}

// action creators
export const setAuthMeProfileData = (userId, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        userId,
        login,
        email,
        isAuth
    }
}
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })


// thunks
export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.authMe().then((data) => {
            const { id = null, login = null, email = null } = data.data;
            dispatch(setAuthMeProfileData(id, login, email, !data.resultCode));
            dispatch(toggleIsFetching(false));
        }
        )
    }
}

export const loginToServer = (loginData) => {
    return (dispatch) => {
        authAPI.login(loginData).then(data => {
            dispatch(getAuthUserData());
        }
        )
    }
}

export const logoutFromServer = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            dispatch(getAuthUserData());
        }
        )
    }
}

export default authReducer;