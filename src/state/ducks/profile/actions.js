import types from "./types";

const setProfile = profileInfo => ({ type: types.SET_PROFILE, payload: {profileInfo}});
const clearProfile = () => setProfile(null);
const toggleIsFetching = isFetching => ({type: types.TOGGLE_IS_FETCHING, payload: {isFetching}});
const setStatus = status => ({type: types.SET_STATUS, payload: {status}});

export default {
    setProfile, clearProfile, toggleIsFetching, setStatus
}