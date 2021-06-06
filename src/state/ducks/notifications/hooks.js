import { useDispatch } from "react-redux";
import appOperations from "./operations";

const { showNotification, removeNotification } = appOperations;

const useRemoveNotificationFn = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(removeNotification(id))
}
 
const useShowNotificationFn = () => {
  const dispatch = useDispatch();
  return (type, message, isHTMLContent=false) => dispatch(showNotification(type, message, isHTMLContent));
};

export default {
  useShowNotificationFn,
  useRemoveNotificationFn,
};
