import { useDispatch } from "react-redux";
import appOperations from "./operations";

const { initilizeApp, showNotification } = appOperations;

export const useInitializeAppFn = () => {
  const dispatch = useDispatch();
  return () => dispatch(initilizeApp());
};

export const useShowNotificationFn = () => {
  const dispatch = useDispatch();
  return (type, message) => dispatch(showNotification(type, message));
};

export default {
  useInitializeAppFn,
  useShowNotificationFn,
};
