import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_CAPTCHA = 'SET-CAPTCHA';
const SET_ERROR_MESSAGE = 'SET-SERVER-ERROR-MESSAGE';

const initialState = {
    isFetching: false,
    isAuth: false,
    isCaptchaRequired: false,
    captchaUrl: null,
    errorMessage: null,
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
        case SET_CAPTCHA: {
            return {
                ...state,
                isCaptchaRequired: action.isRequired,
                captchaUrl: action.url
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.error,
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
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setCaptcha = (isRequired, url) => ({type: SET_CAPTCHA, isRequired, url});

export const clearCaptcha = () => ({type: SET_CAPTCHA, isRequired: false, url:null});

export const setErrorMessage = (error) => ({type:SET_ERROR_MESSAGE, error});

export const clearErrorMessage = () => ({type:SET_ERROR_MESSAGE, error:null})

// thunks
export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.authMe().then((data) => {
            if (data.resultCode === 0) {
            const { id = null, login = null, email = null } = data.data;
            dispatch(setAuthMeProfileData(id, login, email, !data.resultCode));
            dispatch(toggleIsFetching(false));
            }
        }
        )
    }
}

export const loginToServer = (loginData, formError) => {
    return (dispatch) => {
        authAPI.login(loginData).then(data => {
            if (data.resultCode === 0) {
                dispatch(clearErrorMessage());
                dispatch(getAuthUserData());
            }
            else if (data.resultCode === 10) {
                dispatch(getCaptcha());
                dispatch(setErrorMessage('Please, enter captcha'));
            }
            else if (data.resultCode === 1) {
                const errors = data.messages.join('<br/>')
                dispatch(setErrorMessage(errors));
            }
            else {
                dispatch(setErrorMessage('Unknown error'));
            }
        }
        )
    }
}

export const logoutFromServer = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            dispatch(setAuthMeProfileData(null, null, null, false));
        }
        )
    }
}

export const getCaptcha = () => {
    return (dispatch) => {
        authAPI.getCaptchaUrl().then(data => {
            dispatch(setCaptcha(true, data.url));
        })
    }
}

export default authReducer;