import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_CAPTCHA = 'SET-CAPTCHA';

const initialState = {
    isAuth: false, userId: null, login: null, email: null,
    isFetching: false, isCaptchaRequired: false, captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, userId: action.userId, login: action.login, 
                email: action.email, isAuth: action.isAuth }
        
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching, }

        case SET_CAPTCHA: 
            return {...state, isCaptchaRequired: action.isRequired, captchaUrl: action.url, }
    }
    return state;
}

// action creators
export const setAuthMeProfileData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA, userId, login, email, isAuth, })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setCaptcha = (isRequired, url) => ({ type: SET_CAPTCHA, isRequired, url });

export const clearCaptcha = () => ({ type: SET_CAPTCHA, isRequired: false, url: null });


// thunks
export const getAuthUserData = () => dispatch => {
    dispatch(toggleIsFetching(true));
    return authAPI.authMe().then( data => {
        if (data.resultCode === 0) {
            const { id = null, login = null, email = null } = data.data;
            dispatch(setAuthMeProfileData(id, login, email, !data.resultCode));
        }
        dispatch(toggleIsFetching(false));
    })
}

export const loginToServer = (loginData) => (dispatch) => {
    return authAPI.login(loginData).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
            dispatch(clearCaptcha());
        }
        else {
            data.resultCode === 10 && dispatch(getCaptcha());
            return data.messages.join('<br/>');
        }
    })
}

export const logoutFromServer = () => dispatch => {
    authAPI.logout().then( data => {
        if (data.resultCode === 0) {
            dispatch(setAuthMeProfileData(null, null, null, false));
        }
    })
}


export const getCaptcha = () => dispatch => {
    authAPI.getCaptchaUrl().then( data => {
        dispatch(setCaptcha(true, data.url));
    })
}

export default authReducer;