import types from "./types";

const { SET_CAPTCHA, SET_USER_DATA, TOGGLE_IS_FETCHING } = types

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
    case TOGGLE_IS_FETCHING:
    case SET_CAPTCHA:
      return { ...state, ...action.payload };
  }
  return state;
};

export default authReducer;
