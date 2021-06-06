import types from "./types";

const { ADD_NOTIFICATION, REMOVE_NOTIFICATION } = types;

const initialState = {
  appNotifications: [],
  nextNotificationId: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        nextNotificationId: state.nextNotificationId + 1,
        appNotifications: [
          ...state.appNotifications,
          action.payload.notification,
        ],
      };

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        appNotifications: [
          ...state.appNotifications.filter(
            (notification) => notification.id !== action.payload.id
          ),
        ],
      };
  }
  return state;
};

export default appReducer