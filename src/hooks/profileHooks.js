import { useDispatch } from "react-redux";
import {
  changeProfileInfo,
  changeStatus,
  clearProfile,
  fetchProfile,
  fetchStatus,
  uploadProfilePhoto,
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

export const useUploadProfilePhotoFn = () => {
  const dispatch = useDispatch();
  return (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    return dispatch(uploadProfilePhoto(formData))
  };
};

export const useChangeStatusFn = () => {
  const dispatch = useDispatch();
  return (status) => dispatch(changeStatus(status));
};
