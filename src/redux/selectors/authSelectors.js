import { createSelector } from "reselect";

export const getIsAuth = state => state.auth.isAuth;
export const getAuthLogin = state => state.auth.login;
export const getAuthEmail = state => state.auth.email;
export const getAuthId = state => state.auth.userId;
export const getIsFetching = state => state.auth.isFetching;
export const getIsCaptchaRequired = state => state.auth.isCaptchaRequired;
export const getCaptchaUrl = state => state.auth.captchaUrl;

export const getAuthData = createSelector(getIsAuth, getAuthLogin, getAuthEmail, getAuthId, 
    (isAuth, login, email, userId) => ({isAuth, login, email, userId}))