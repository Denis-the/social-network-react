import types from "./types";

const { INITIALIZATION_SUCCESS, ADD_NOTIFICATION, REMOVE_NOTIFICATION } = types;

const initialState = {
  initialized: false,
  appNotifications: [],
  nextNotificationId: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_SUCCESS:
      return { ...state, initialized: true };

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