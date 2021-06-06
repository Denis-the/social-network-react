import React from "react";
import { useSelector } from "react-redux";
import {
  notificationsSelectors,
  notificationsHooks,
} from "../../state/ducks/notifications";
import NotificationsList from "./NotificationsList";

const { getNotifications } = notificationsSelectors;

const AppNotificationsContainer = () => {
  const notifications = useSelector(getNotifications);
  const removeNotification = notificationsHooks.useRemoveNotificationFn();
  return (
    <NotificationsList
      removeNotification={removeNotification}
      notifications={notifications}
    />
  );
};

export default AppNotificationsContainer;