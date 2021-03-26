import { usersAPI } from "../api/api";

const SET_USERS = "SET-USERS";
const SET_PER_PAGE_COUNT = 'SET-PER-PAGE-COUNT';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const ADD_FOLLOWING_IN_PROGRESS = "ADD-FOLLOWING-IN-PROGRESS";
const DELETE_FOLLOWING_IN_PROGRESS = "DELETE-FOLLOWING-IN-PROGRESS";

const initialUsersState = {
    users: [],
    perPage: 10,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: new Set(),
}


const usersReducer = (state = initialUsersState, action) => {

    switch (action.type) {
        case SET_PER_PAGE_COUNT: {
            if (action.newCount >= 1 && action.newCount <= 100) return { ...state, perPage: action.newCount };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount:action.newCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage:action.currentPage}
        }
        case SET_USERS: {
            return { ...state, users: [...action.newUsers] }
        }
        case FOLLOW: {
            const stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    } else {
                        return u
                    }
                })
            }
            return stateCopy
        }
        case UNFOLLOW: {
            const stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    } else {
                        return u
                    }
                })
            }

            return stateCopy
        }
        case ADD_FOLLOWING_IN_PROGRESS: {
            const setCopy = new Set(state.FollowingInProgress);
            setCopy.add(action.userId);
            return {...state, followingInProgress:setCopy}
        }
        case DELETE_FOLLOWING_IN_PROGRESS: {
            const setCopy = new Set(state.followingInProgress);
            console.log(setCopy)
            setCopy.delete(action.userId);
            return {...state, followingInProgress:setCopy}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}

        }

    }

    return state;
}

// action creators
export const setPerPageCount = (newCount) => {
    return {
        type: SET_PER_PAGE_COUNT,
        newCount: newCount,
    }
}
export const setTotalUsersCount = (newCount) => {
    return {
        type: SET_PER_PAGE_COUNT,
        newCount: newCount,
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage:currentPage,
    }
}
export const setUsers = (newUsers) => {
    return {
        type: SET_USERS,
        newUsers: newUsers
    }
}
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    }
}
export const addFollowingProgress = (userId) => ({
    type:ADD_FOLLOWING_IN_PROGRESS, userId
})
export const deleteFollowingProgress = (userId) => ({
    type:DELETE_FOLLOWING_IN_PROGRESS, userId
})


// thunks
export const getUsersTC = (pageNumber, perPage, pagesTotal) => {
    return (dispatch) => {
        debugger
        if (pageNumber < 1 || (pageNumber > pagesTotal && pagesTotal > 0)) return;
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(pageNumber, perPage).then(data => {
            const users = data.items;
            const totalUsersCount = data.totalCount;

            dispatch(toggleIsFetching(false));
            dispatch(setUsers(users));
            dispatch(setTotalUsersCount(totalUsersCount));
            dispatch(setCurrentPage(pageNumber));
            dispatch(setPerPageCount(perPage));
        })
    }
}

export const followTC = (userId) => {
    return (dispatch, getState) => {
        if (getState().usersReducer.followingInProgress.has(userId)) return;
        dispatch(addFollowingProgress(userId));
        usersAPI.followUser(userId).then(
                data => {
                    dispatch(deleteFollowingProgress(userId));
                    if (data.resultCode === 0) dispatch(follow(userId));
                }
            )
    }
}

export const unfollowTC = (userId) => {
    return (dispatch, getState) => {
        if (getState().usersReducer.followingInProgress.has(userId)) return;
        dispatch(addFollowingProgress(userId));
        usersAPI.unfollowUser(userId).then(
                data => {
                    dispatch(deleteFollowingProgress(userId));
                    if (data.resultCode === 0) dispatch(unfollow(userId));
                }
            )
    }
}



export default usersReducer;