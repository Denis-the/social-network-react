import actions from "./actions";

const { addNotificationSuccess, removeNotificationSuccess } = actions;

const showNotification =
  (type, message, isHTMLContent=false, timer = 10000) =>
  async (dispatch, getState) => {
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
