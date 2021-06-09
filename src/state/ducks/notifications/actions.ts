import types, { notificationType } from "./types";

const { ADD_NOTIFICATION, REMOVE_NOTIFICATION } = types;

type addNotificationSuccessActionType = {
  type: typeof ADD_NOTIFICATION;
  payload: { notification: notificationType };
};

const addNotificationSuccess = (
  notification: notificationType
): addNotificationSuccessActionType => ({
  type: ADD_NOTIFICATION,
  payload: { notification },
});

type removeNotificationSuccessActionType = {
  type: typeof ADD_NOTIFICATION;
  payload: { id: number };
};

const removeNotificationSuccess = (
  notificationId: number
): removeNotificationSuccessActionType => ({
  type: REMOVE_NOTIFICATION,
  payload: { id: notificationId },
});

export default {
  addNotificationSuccess,
  removeNotificationSuccess,
};
