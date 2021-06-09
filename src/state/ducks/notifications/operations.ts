import actions from "./actions";
import { notificationTypeType } from "./types";

const { addNotificationSuccess, removeNotificationSuccess } = actions;

const showNotification =
  (
    type: notificationTypeType,
    message: string,
    isHTMLContent = false,
    timer = 10000
  ): Function =>
  (dispatch: Function, getState: Function): void => {
    const notificationId = getState().notificationsData.nextNotificationId;
    const notification = { id: notificationId, type, message, isHTMLContent };
    dispatch(addNotificationSuccess(notification));

    setTimeout(() => {
      dispatch(removeNotificationSuccess(notificationId));
    }, timer);
  };

export default {
  showNotification,
  removeNotification: removeNotificationSuccess,
};
