import types, {
  CaptchaUrlType,
  EmailType,
  IsAuthType,
  IsCaptchaRequiredType,
  IsFetchingType,
  LoginType,
  UserIdType,
} from "./types";

const { SET_CAPTCHA, SET_USER_DATA, TOGGLE_IS_FETCHING } = types;

type SetAuthMeProfileDataActionType = {
  type: typeof SET_USER_DATA;
  payload: {
    userId: UserIdType;
    login: LoginType;
    email: EmailType;
    isAuth: IsAuthType;
  };
};

const setAuthMeProfileData = (
  userId: UserIdType,
  login: LoginType,
  email: EmailType,
  isAuth: IsAuthType
): SetAuthMeProfileDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  payload: { isFetching: IsFetchingType };
};

const toggleIsFetching = (
  isFetching: IsFetchingType
): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  payload: { isFetching },
});

type SetCaptchaActionType = {
  type: typeof SET_CAPTCHA;
  payload: {
    isCaptchaRequired: IsCaptchaRequiredType;
    captchaUrl: CaptchaUrlType;
  };
};

const setCaptcha = (
  isCaptchaRequired: IsCaptchaRequiredType,
  captchaUrl: CaptchaUrlType
): SetCaptchaActionType => ({
  type: SET_CAPTCHA,
  payload: { isCaptchaRequired, captchaUrl },
});


const clearCaptcha = () => setCaptcha(false, null);

export default {
  clearCaptcha,
  setCaptcha,
  toggleIsFetching,
  setAuthMeProfileData,
};
