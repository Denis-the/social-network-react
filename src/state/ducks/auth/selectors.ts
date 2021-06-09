import { createSelector } from "reselect";

const getIsAuth = (state: any) => state.authData.isAuth;
const getAuthLogin = (state: any) => state.authData.login;
const getAuthEmail = (state: any) => state.authData.email;
const getAuthId = (state: any) => state.authData.userId;
const getIsFetching = (state: any) => state.authData.isFetching;
const getIsCaptchaRequired = (state: any) => state.authData.isCaptchaRequired;
const getCaptchaUrl = (state: any) => state.authData.captchaUrl;

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