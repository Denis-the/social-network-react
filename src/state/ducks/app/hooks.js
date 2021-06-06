import { useDispatch } from "react-redux";
import appOperations from "./operations";

const { initilizeApp } = appOperations;

const useInitializeAppFn = () => {
  const dispatch = useDispatch();
  return () => dispatch(initilizeApp());
};

export default {
  useInitializeAppFn,
};
