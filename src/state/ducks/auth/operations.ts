import actions from "./actions";
import { authAPI } from "../../../api/api";
import { notificationsOperations } from "../notifications";
import { LoginDataType } from "../../../types/types";

const { clearCaptcha, setCaptcha, toggleIsFetching, setAuthMeProfileData } =
  actions;
const { showNotification } = notificationsOperations;

const getAuthUserData = () => async (dispatch: Function) => {
  dispatch(toggleIsFetching(true));
  const responseData = await authAPI.authMe();
  const { id = null, login = null, email = null } = responseData.data;
  dispatch(setAuthMeProfileData(id, login, email, !responseData.resultCode));
  dispatch(toggleIsFetching(false));
  return responseData;
};

const fetchCaptcha = () => async (dispatch: Function) => {
  const responseData = await authAPI.getCaptchaUrl();
  dispatch(setCaptcha(true, responseData.url));
};

const loginToServer =
  (loginData: LoginDataType) => async (dispatch: Function) => {
    const responseData = await authAPI.login(loginData);
    let errorMessages = null;
    if (responseData.resultCode === 0) {
      dispatch(getAuthUserData());
      dispatch(clearCaptcha());
      dispatch(showNotification("info", "You have been logged in"));
    } else {
      if (responseData.resultCode === 10) dispatch(fetchCaptcha());
      errorMessages = responseData.messages.join("<br/>");
      dispatch(
        showNotification(
          "warning",
          `Failed to login<br/>${errorMessages}`,
          true
        )
      );
    }
    return errorMessages;
  };

const logoutFromServer = () => async (dispatch: Function) => {
  const responseData = await authAPI.logout();
  if (responseData.resultCode === 0) {
    dispatch(setAuthMeProfileData(null, null, null, false));
    dispatch(showNotification("info", "You have been logged out"));
  }
};

export default {
  getAuthUserData,
  fetchCaptcha,
  loginToServer,
  logoutFromServer,
  clearCaptcha,
};
