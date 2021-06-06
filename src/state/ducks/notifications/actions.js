import types from "./types";

const {ADD_NOTIFICATION, REMOVE_NOTIFICATION} = types

const addNotificationSuccess = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: { notification },
});
const removeNotificationSuccess = (notificationId) => ({
    type: REMOVE_NOTIFICATION,
    payload: { id: notificationId },
  });

export default {
    addNotificationSuccess,
    removeNotificationSuccess,
}