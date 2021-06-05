import types from "./types";

const {ADD_NOTIFICATION, INITIALIZATION_SUCCESS, REMOVE_NOTIFICATION} = types

const initilizeSuccess = () => ({ type: INITIALIZATION_SUCCESS });
const addNotificationSuccess = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: { notification },
});
const removeNotificationSuccess = (notificationId) => ({
    type: REMOVE_NOTIFICATION,
    payload: { id: notificationId },
  });

export default {
    initilizeSuccess,
    addNotificationSuccess,
    removeNotificationSuccess,
}