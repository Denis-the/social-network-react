const SET_USER_DATA = "social/auth/SET-USER-DATA";
const TOGGLE_IS_FETCHING = "social/auth/TOGGLE-IS-FETCHING";
const SET_CAPTCHA = "social/auth/SET-CAPTCHA";

export type AuthIdType = string;
export type UserIdType = number | null;
export type LoginType = string | null;
export type EmailType = string | null;
export type IsAuthType = boolean;
export type IsFetchingType = boolean;
export type CaptchaUrlType = string | null;
export type IsCaptchaRequiredType = boolean;

export type AuthStateType = {
  isAuth: IsAuthType;
  userId: UserIdType;
  login: LoginType | null;
  email: EmailType | null;
  isFetching: IsFetchingType;
  isCaptchaRequired: IsCaptchaRequiredType;
  captchaUrl: CaptchaUrlType | null;
};

export default {
  SET_USER_DATA,
  TOGGLE_IS_FETCHING,
  SET_CAPTCHA,
};
