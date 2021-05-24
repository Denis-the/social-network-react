import { useDispatch } from "react-redux";
import { initilizeApp } from "../redux/appReducer";

export const useInitializeAppFn = () => {
  const dispatch = useDispatch();
  return () => dispatch(initilizeApp());
};
