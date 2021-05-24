import { useDispatch } from "react-redux";
import {
  changeProfileInfo,
  changeStatus,
  clearProfile,
  fetchProfile,
  fetchStatus,
} from "../redux/profileReducer";

export const useFetchProfileFn = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(fetchProfile(id));
};

export const useFetchStatusFn = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(fetchStatus(id));
};

export const useClearThenFetchProfileFn = () => {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(clearProfile());
    dispatch(fetchProfile(id));
  };
};

export const useChangeProfileFn = () => {
  const dispatch = useDispatch();
  return (fields) => dispatch(changeProfileInfo(fields));
};

export const useChangeStatusFn = () => {
  const dispatch = useDispatch();
  return (status) => dispatch(changeStatus(status));
};
