import { useDispatch } from "react-redux";
import { initilizeApp, showNotification } from "../redux/appReducer";

export const useInitializeAppFn = () => {
  const dispatch = useDispatch();
  return () => dispatch(initilizeApp());
};

export const useShowNotificationFn = () => {
  const dispatch = useDispatch();
  return (type, message) => dispatch(showNotification(type, message))
}