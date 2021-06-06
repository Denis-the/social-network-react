const getNotifications = state => state.notificationsData.appNotifications;
const getNextNotificationId = state => state.notificationsData.nextNotificationId;

export default {
    getNotifications,
    getNextNotificationId,
}