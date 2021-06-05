import { createSelector } from "reselect";

const getIsAuth = state => state.authData.isAuth;
const getAuthLogin = state => state.authData.login;
const getAuthEmail = state => state.authData.email;
const getAuthId = state => state.authData.userId;
const getIsFetching = state => state.authData.isFetching;
const getIsCaptchaRequired = state => state.authData.isCaptchaRequired;
const getCaptchaUrl = state => state.authData.captchaUrl;

const getAuthData = createSelector(getIsAuth, getAuthLogin, getAuthEmail, getAuthId, 
    (isAuth, login, email, userId) => ({isAuth, login, email, userId}))

export default {
    getIsAuth,
    getAuthLogin,
    getAuthEmail,
    getAuthId,
    getIsFetching,
    getIsCaptchaRequired,
    getCaptchaUrl,
    getAuthData,
}