import { profileAPI } from "../../../api/api";
import actions from "./actions";
import { authOperations } from "../auth";
import { notificationsOperations } from "../notifications";

const { getAuthUserData } = authOperations;
const { showNotification } = notificationsOperations;
const { toggleIsFetching, setProfile, setStatus, clearProfile } = actions;

const fetchProfile = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  try {
    const profileData = await profileAPI.getProfileData(userId);
    dispatch(setProfile(profileData));
  } catch (err) {
    dispatch(
      showNotification(
        "error",
        `Failed to load profile<br/>${err.message}`,
        true
      )
    );
  }

  dispatch(toggleIsFetching(false));
};

const changeStatus = (newStatus) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  try {
    const setStatusResponse = await profileAPI.setStatus(newStatus);
    if (setStatusResponse.resultCode !== 0)
      throw new Error("New status hasn't been updated");
    dispatch(setStatus(newStatus));
    dispatch(showNotification("info", "Status has been updated"));
  } catch (err) {
    dispatch(
      showNotification(
        "error",
        `Failed to update status<br/>${err.message}`,
        true
      )
    );
  }
  dispatch(toggleIsFetching(false));
};

const fetchStatus = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  try {
    const getStatusResponse = await profileAPI.getStatus(userId);

    dispatch(setStatus(getStatusResponse));
  } catch (err) {
    dispatch(
      showNotification(
        "error",
        `Failed to load status<br/>${err.message}`,
        true
      )
    );
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
    dispatch(
      showNotification(
        "info",
        "Profile info <br/>has been changed successfully",
        true
      )
    );
  } catch (err) {
    errorMessages = setProfileResponse?.messages.join("<br/>");
    dispatch(
      showNotification(
        "error",
        `Failed to change profile info<br/>${errorMessages}`,
        true
      )
    );
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
    if (response.resultCode !== 0) throw new Error();
    dispatch(
      showNotification("info", "Profile photo has been successfully uploaded")
    );
  } catch (err) {
    errorMessages = response?.messages.join("<br/>");
    dispatch(
      showNotification(
        "error",
        `Failed to upload profile photo<br/>${errorMessages}`,
        true
      )
    );
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
