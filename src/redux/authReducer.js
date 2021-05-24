import { authAPI } from "../api/api";

const SET_USER_DATA = "social/auth/SET-USER-DATA";
const TOGGLE_IS_FETCHING = "social/auth/TOGGLE-IS-FETCHING";
const SET_CAPTCHA = "social/auth/SET-CAPTCHA";

const initialState = {
  isAuth: false,
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isCaptchaRequired: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.payload };

    case SET_CAPTCHA:
      return {
        ...state,
        isCaptchaRequired: action.payload.isRequired,
        captchaUrl: action.payload.url,
      };
  }
  return state;
};

// action creators
export const setAuthMeProfileData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});
export const setCaptcha = (isRequired, url) => ({
  type: SET_CAPTCHA,
  payload: { isRequired, url },
});
export const clearCaptcha = () => setCaptcha(false, null);

// thunks
export const getAuthUserData = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const responseData = await authAPI.authMe();
  const { id = null, login = null, email = null } = responseData.data;
  dispatch(setAuthMeProfileData(id, login, email, !responseData.resultCode));
  dispatch(toggleIsFetching(false));
  return responseData;
};

export const fetchCaptcha = () => async (dispatch) => {
    const responseData = await authAPI.getCaptchaUrl();
    dispatch(setCaptcha(true, responseData.url));
  };

export const loginToServer = (loginData) => async (dispatch) => {
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

export const logoutFromServer = () => async (dispatch) => {
  const responseData = await authAPI.logout();
  if (responseData.resultCode === 0) {
    dispatch(setAuthMeProfileData(null, null, null, false));
  }
};



export default authReducer;
