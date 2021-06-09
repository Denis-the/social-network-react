import { useDispatch } from "react-redux";
import appOperations from "./operations";
import { notificationTypeType } from "./types";

const { showNotification, removeNotification } = appOperations;

const useRemoveNotificationFn = (): Function => {
  const dispatch = useDispatch();
  return (id: number) => dispatch(removeNotification(id));
};

const useShowNotificationFn = (): Function => {
  const dispatch = useDispatch();
  return (
    type: notificationTypeType,
    message: string,
    isHTMLContent?: boolean,
    timer?: number
  ) => dispatch(showNotification(type, message, isHTMLContent, timer));
};

export default {
  useShowNotificationFn,
  useRemoveNotificationFn,
};
