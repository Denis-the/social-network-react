import { profileAPI } from "../../../api/api";
import { authOperations } from "../auth";
import actions from "./actions";

const { getAuthUserData } = authOperations;
const { toggleIsFetching, setProfile, setStatus, clearProfile } = actions;

const fetchProfile = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  try {
    const profileData = await profileAPI.getProfileData(userId);
    dispatch(setProfile(profileData));
  } catch (err) {
    console.error(err);
  }

  dispatch(toggleIsFetching(false));
};

const changeStatus = (newStatus) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  try {
    const setStatusResponse = await profileAPI.setStatus(newStatus);
    if (setStatusResponse.resultCode !== 0)
      throw new Error("status hasn't been set");
    console.log(newStatus)
    dispatch(setStatus(newStatus));
  } catch (err) {
    console.error(err);
  }
  dispatch(toggleIsFetching(false));
};

const fetchStatus = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  try {
    const getStatusResponse = await profileAPI.getStatus(userId);

    dispatch(setStatus(getStatusResponse));
  } catch (err) {
    console.error(err);
  }
  dispatch(toggleIsFetching(false));
};

const changeProfileInfo = (profileInfo) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let errorMessages = null;
  let setProfileResponse;
  try {
    setProfileResponse = await profileAPI.setProfileInfo(profileInfo);
    if (setProfileResponse.resultCode !== 0) throw setProfileResponse;
    dispatch(setProfile(profileInfo));
    dispatch(getAuthUserData());
  } catch (err) {
    errorMessages = setProfileResponse?.messages.join("<br/>");
  } finally {
    dispatch(toggleIsFetching(false));
  }
  return errorMessages;
};

const uploadProfilePhoto = (formData) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let errorMessages = null;
  let response;
  try {
    response = await profileAPI.setProfilePhoto(formData);
    if (response.resultCode !== 0) throw response;
  } catch (err) {
    errorMessages = response?.messages.join("<br/>");
  } finally {
    dispatch(toggleIsFetching(false));
  }
  return errorMessages;
};

export default {
  clearProfile,
  fetchProfile,
  changeStatus,
  uploadProfilePhoto,
  toggleIsFetching,
  changeProfileInfo,
  fetchStatus,
};
