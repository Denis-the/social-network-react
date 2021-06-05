import { authAPI } from "../../../api/api";
import actions  from "./actions";

const {clearCaptcha, setCaptcha, toggleIsFetching, setAuthMeProfileData } = actions

const getAuthUserData = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const responseData = await authAPI.authMe();
  const { id = null, login = null, email = null } = responseData.data;
  dispatch(
    setAuthMeProfileData(id, login, email, !responseData.resultCode)
  );
  dispatch(toggleIsFetching(false));
  return responseData;
};

const fetchCaptcha = () => async (dispatch) => {
  const responseData = await authAPI.getCaptchaUrl();
  dispatch(setCaptcha(true, responseData.url));
};

const loginToServer = (loginData) => async (dispatch) => {
  const responseData = await authAPI.login(loginData);
  let errorMessages = null;
  if (responseData.resultCode === 0) {
    dispatch(getAuthUserData());
    dispatch(clearCaptcha());
  } else {
    if (responseData.resultCode === 10) dispatch(fetchCaptcha());
    errorMessages = responseData.messages.join("<br/>");
  }
  return errorMessages;
};

const logoutFromServer = () => async (dispatch) => {
  const responseData = await authAPI.logout();
  if (responseData.resultCode === 0) {
    dispatch(setAuthMeProfileData(null, null, null, false));
  }
};

export default {getAuthUserData, fetchCaptcha, loginToServer, logoutFromServer, clearCaptcha};
