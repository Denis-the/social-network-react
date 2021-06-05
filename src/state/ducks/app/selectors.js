const getIsInitialized = state => state.appData.initialized;
const getNotifications = state => state.appData.appNotifications;
const getNextNotificationId = state => state.appData.nextNotificationId;

export default {
    getIsInitialized,
    getNotifications,
    getNextNotificationId,
}