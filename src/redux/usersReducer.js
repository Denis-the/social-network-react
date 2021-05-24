import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const SET_USERS = "social/users/SET-USERS";
const SET_SEARCH_TERM = "social/users/SET_SEARCH_TERM";
const SET_SEARCH_FOLLOWED = "social/users/SET_SEARCH_FOLLOWED";
const SET_PER_PAGE_COUNT = 'social/users/SET-PER-PAGE-COUNT';
const SET_TOTAL_USERS_COUNT = 'social/users/SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'social/users/SET-CURRENT-PAGE';
const FOLLOW = "social/users/FOLLOW";
const UNFOLLOW = "social/users/UNFOLLOW";
const TOGGLE_IS_FETCHING = "social/users/TOGGLE-IS-FETCHING";
const ADD_FOLLOWING_IN_PROGRESS = "social/users/ADD-FOLLOWING-IN-PROGRESS";
const DELETE_FOLLOWING_IN_PROGRESS = "social/users/DELETE-FOLLOWING-IN-PROGRESS";

const initialUsersState = {
    users: [],
    searchTerm: null,
    searchFollowed: null,
    perPage: 10,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: new Set(),
}


const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case SET_PER_PAGE_COUNT: {
            if (action.payload >= 1 && action.payload <= 100) {
                return { ...state, perPage: action.payload };
            }
            return { ...state}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.payload }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.payload }
        }
        case SET_USERS: {
            return { ...state, users: [...action.payload] }
        }
        case SET_SEARCH_FOLLOWED: {
            return { ...state, searchFollowed: action.payload }
        }
        case SET_SEARCH_TERM: {
            return { ...state, searchTerm: action.payload }
        }
        case FOLLOW: {
            return { ...state,
                users: updateObjectInArray(state.users, action.payload, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return { ...state,
                users: updateObjectInArray(state.users, action.payload, 'id', {followed: false})
            }
        }
        case ADD_FOLLOWING_IN_PROGRESS: {
            const setCopy = new Set(state.followingInProgress);
            setCopy.add(action.payload);
            return { ...state, followingInProgress: setCopy }
        }
        case DELETE_FOLLOWING_IN_PROGRESS: {
            const setCopy = new Set(state.followingInProgress);
            setCopy.delete(action.payload);
            return { ...state, followingInProgress: setCopy }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.payload }

        }
    }

    return state;
}


// action creators
export const setPerPageCount = newCount => ({ type: SET_PER_PAGE_COUNT, payload: newCount, });
export const setTotalUsersCount = newCount => ({ type: SET_TOTAL_USERS_COUNT, payload: newCount, });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, payload: currentPage, });
export const setUsers = newUsers => ({ type: SET_USERS, payload: newUsers, });
export const setSearchTerm = searchTerm => ({ type: SET_SEARCH_TERM, payload: searchTerm });
export const setSearchFollowed = searchFollowed => ({ type: SET_SEARCH_FOLLOWED, payload: searchFollowed });
export const follow = userId => ({ type: FOLLOW, payload: userId, });
export const unfollow = userId => ({ type: UNFOLLOW, payload: userId, });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, payload: isFetching, });
export const addFollowingProgress = userId => ({ type: ADD_FOLLOWING_IN_PROGRESS, payload: userId });
export const deleteFollowingProgress = userId => ({ type: DELETE_FOLLOWING_IN_PROGRESS, payload: userId });


// thunks
export const fetchUsers = ({ page = 1, perPage = 10, term = null, followed = null }) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        const data = await usersAPI.requestUsers(page, perPage, term, followed);
        const users = data.items;
        const totalUsersCount = data.totalCount;
        dispatch(setUsers(users));
        dispatch(setTotalUsersCount(totalUsersCount));
        dispatch(setCurrentPage(page));
        dispatch(setPerPageCount(perPage));
        dispatch(setSearchTerm(term));
        dispatch(setSearchFollowed(JSON.parse(followed)));
    } catch (err) {
        console.log(err);
    }
    dispatch(toggleIsFetching(false));
}


const followUnfollowFlow = async (dispatch, getState, userId, APIMethod, action) => {
    if (getState().usersReducer.followingInProgress.has(userId)) return;
    dispatch(addFollowingProgress(userId));
    const data = await APIMethod(userId);
    dispatch(deleteFollowingProgress(userId));
    if (data.resultCode === 0) dispatch(action);

}

export const followTC = (userId) => async (dispatch, getState) => {
    const APIMethod = usersAPI.followUser.bind(usersAPI);
    const action = follow(userId);
    followUnfollowFlow(dispatch, getState, userId, APIMethod, action);
}

export const unfollowTC = (userId) => async (dispatch, getState) => {
    const APIMethod = usersAPI.unfollowUser.bind(usersAPI);
    const action = unfollow(userId);
    followUnfollowFlow(dispatch, getState, userId, APIMethod, action);
}

export default usersReducer;