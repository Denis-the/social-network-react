import { profileAPI } from "../api/api";

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
        };  
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
export const toggleIsFetching = isFetching => ({type:TOGGLE_IS_FETCHING, payload:isFetching});
export const setStatus = newStatus => ({type:SET_STATUS, payload:newStatus});

// thunks
export const getProfile = (userId) => async (dispatch) => {
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
        if (!!setStatusResponse.resultCode) throw new Error("status hadn't been set");
        dispatch(setStatus(newStatus));
    } catch (err) {
        console.error(err);
    }
    dispatch(toggleIsFetching(false));
}

export const getStatus = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        const getStatusResponse = await profileAPI.getStatus(userId);
        dispatch(setStatus(getStatusResponse));
    } catch (err) {
        console.error(err);
    }
    dispatch(toggleIsFetching(false));
}

export default profileReducer;