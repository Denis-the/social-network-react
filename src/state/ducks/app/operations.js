import actions from "./actions";
import { authOperations } from "../auth";

const { getAuthUserData } = authOperations;
const { initilizeSuccess, addNotificationSuccess, removeNotificationSuccess } =
  actions;

const initilizeApp = () => (dispatch) => {
  dispatch(getAuthUserData()).then(() => dispatch(initilizeSuccess()));
};

const showNotification =
  (type, message, timer = 5000) =>
  async (dispatch, getState) => {
    const notificationId = getState().appData.nextNotificationId;
    const notification = { id: notificationId, type, message };
    dispatch(addNotificationSuccess(notification));

    setTimeout(() => {
      dispatch(removeNotificationSuccess(notificationId));
    }, timer);
  };

export default {
  initilizeApp,
  showNotification,
};
