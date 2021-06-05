import types from "./types";

const { SET_CAPTCHA, SET_USER_DATA, TOGGLE_IS_FETCHING } = types

const setAuthMeProfileData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: { isFetching },
});
const setCaptcha = (isCaptchaRequired, captchaUrl) => ({
  type: SET_CAPTCHA,
  payload: { isCaptchaRequired, captchaUrl },
});
const clearCaptcha = () => setCaptcha(false, null);

export default { clearCaptcha, setCaptcha, toggleIsFetching, setAuthMeProfileData };
