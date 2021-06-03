import { getAuthUserData } from "./authReducer";

const INITIALIZATION_SUCCESS = "social/app/INITIALIZE-SUCCESS";
const ADD_NOTIFICATION = "social/app/ADD-NOTIFICATION";
const REMOVE_NOTIFICATION = "social/app/REMOVE-NOTIFICATION";

const initialState = {
  initialized: false,
  appNotifications: [],
  nextNotificationId : 0
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
            ...state.appNotifications.filter(notification => notification.id !== action.payload.id),
          ],
    };
  }

  return state;
};

// ACs
export const initilizeSuccess = () => ({ type: INITIALIZATION_SUCCESS });
export const addNotificationSuccess = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: { notification },
});
export const removeNotificationSuccess = (notificationId) => ({
    type: REMOVE_NOTIFICATION,
    payload: { id: notificationId },
  });


// thunks
export const initilizeApp = () => (dispatch) => {
  dispatch(getAuthUserData()).then(() => dispatch(initilizeSuccess()));
};

export const showNotification = (type, message, timer = 5000) => async (dispatch, getState) => {
    const notificationId = getState().app.nextNotificationId;
    const notification = {id: notificationId, type, message};
    dispatch(addNotificationSuccess(notification));

    setTimeout(() => {
        dispatch(removeNotificationSuccess(notificationId));
    }, timer)
}

export default appReducer;
