const ADD_NOTIFICATION = "social/app/ADD-NOTIFICATION";
const REMOVE_NOTIFICATION = "social/app/REMOVE-NOTIFICATION";

type notificationTypeType = "info" | "warning" | "error";

type notificationType = {
  id: number;
  message: string;
  type: notificationTypeType;
};

type notificationStateType = {
  appNotifications: Array<notificationType>;
  nextNotificationId: number;
};

export type {notificationTypeType, notificationType, notificationStateType}

export default {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
};
