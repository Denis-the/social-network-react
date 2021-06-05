import { useDispatch } from "react-redux";
import profileOperations from "./operations";

const {
    changeProfileInfo,
    changeStatus,
    clearProfile,
    fetchProfile,
    fetchStatus,
    uploadProfilePhoto,
} = profileOperations

const useFetchProfileFn = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(fetchProfile(id));
};

const useFetchStatusFn = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(fetchStatus(id));
};

const useClearThenFetchProfileFn = () => {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(clearProfile());
    dispatch(fetchProfile(id));
  };
};

const useChangeProfileFn = () => {
  const dispatch = useDispatch();
  return (fields) => dispatch(changeProfileInfo(fields));
};

const useUploadProfilePhotoFn = () => {
  const dispatch = useDispatch();
  return (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    return dispatch(uploadProfilePhoto(formData))
  };
};

const useChangeStatusFn = () => {
  const dispatch = useDispatch();
  return (status) => dispatch(changeStatus(status));
};

export default {
    useChangeStatusFn,
    useUploadProfilePhotoFn,
    useChangeProfileFn,
    useClearThenFetchProfileFn,
    useFetchStatusFn,
    useFetchProfileFn,
}