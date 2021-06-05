const getStatus = (state) => state.profileData.status;
const getProfileInfo = (state) => state.profileData.profileInfo;
const getIsFetching = (state) => state.profileData.isFetching;

export default {
  getStatus,
  getProfileInfo,
  getIsFetching,
};
