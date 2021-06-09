const getNotifications = (state: any) => state.notificationsData.appNotifications;
const getNextNotificationId = (state: any) => state.notificationsData.nextNotificationId;

export default {
    getNotifications,
    getNextNotificationId,
}