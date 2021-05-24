import { profileAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";

const SET_PROFILE = 'social/profile/SET-PROFILE';
const TOGGLE_IS_FETCHING = 'social/profile/TOGGLE_IS_FETCHING';
const SET_STATUS = 'social/profile/SET-STATUS';

const initialProfileState = {
        profileInfo:  null,
        status: null,
        isFetching: false,
}


const profileReducer = (state = initialProfileState, action) => {

    switch(action.type) {
        case SET_PROFILE: {
            return {...state, profileInfo: action.payload}
        }  
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload}
        }
        case SET_STATUS: {
            return {...state, status:action.payload}
        }

    }

    return state 
}

// AC
export const setProfile = profileInfo => ({ type:SET_PROFILE, payload:profileInfo,});
export const clearProfile = () => ({ type:SET_PROFILE, payload:null});
export const toggleIsFetching = isFetching => ({type:TOGGLE_IS_FETCHING, payload:isFetching});
export const setStatus = newStatus => ({type:SET_STATUS, payload:newStatus});

// thunks
export const fetchProfile = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        const profileData = await profileAPI.getProfileData(userId);
        dispatch(setProfile(profileData));
    } catch (err) {
        console.error(err)
    }

    dispatch(toggleIsFetching(false));
}

export const changeStatus = (newStatus) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        const setStatusResponse = await profileAPI.setStatus(newStatus);
        if (setStatusResponse.resultCode !== 0) throw new Error("status hasn't been set");
        dispatch(setStatus(newStatus));
    } catch (err) {
        console.error(err);
    }
    dispatch(toggleIsFetching(false));
}

export const fetchStatus = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        const getStatusResponse = await profileAPI.getStatus(userId);
        dispatch(setStatus(getStatusResponse));
    } catch (err) {
        console.error(err);
    }
    dispatch(toggleIsFetching(false));
}

export const changeProfileInfo = profileInfo => async dispatch => {
    dispatch(toggleIsFetching(true));
    let errorMessages = null;
    let setProfileResponse;
    try {
        setProfileResponse = await profileAPI.setProfileInfo(profileInfo);
        if (setProfileResponse.resultCode !== 0) throw setProfileResponse
        dispatch(setProfile(profileInfo));
        dispatch(getAuthUserData())
    } catch (err) {
        errorMessages = setProfileResponse?.messages.join('<br/>');
    } finally {
        dispatch(toggleIsFetching(false));
    }
    return errorMessages;
} 

export default profileReducer;