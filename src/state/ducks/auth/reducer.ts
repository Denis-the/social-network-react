import types, { AuthStateType } from "./types";

const { SET_CAPTCHA, SET_USER_DATA, TOGGLE_IS_FETCHING } = types;

const initialState: AuthStateType = {
  isAuth: false,
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isCaptchaRequired: false,
  captchaUrl: null,
};

const authReducer = (
  state: AuthStateType = initialState,
  action: any
): AuthStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case TOGGLE_IS_FETCHING:
    case SET_CAPTCHA:
      return { ...state, ...action.payload };
  }
  return state;
};

export default authReducer;
