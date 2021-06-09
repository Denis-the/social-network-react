import reducer from "./reducer";


export { default as notificationsSelectors } from "./selectors";
export { default as notificationsOperations } from "./operations";
export { default as notificationsTypes } from "./types";
export { default as notificationsHooks } from "./hooks";
export type {
    notificationTypeType,
    notificationType,
    notificationStateType,
  } from "./types";

export default reducer;
