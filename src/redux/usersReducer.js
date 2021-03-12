import axios from 'axios';

const SET_USERS = "SET-USERS";
const SET_PER_PAGE_COUNT = 'SET-PER-PAGE-COUNT';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";



const initialUsersState = {
    users: [],
    perPage: 10,
    currentPage: 1,
    totalUsersCount:0,
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
                        return { ...u, isFollowing: true }
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
                        return { ...u, isFollowing: false };
                    } else {
                        return u
                    }
                })
            }

            return stateCopy
        }


    }

    return state;
}

export const setPerPageCountAC = (newCount) => {
    return {
        type: SET_PER_PAGE_COUNT,
        newCount: newCount,
    }
}
export const setTotalUsersCountAC = (newCount) => {
    return {
        type: SET_PER_PAGE_COUNT,
        newCount: newCount,
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage:currentPage,
    }
}
export const setUsersAC = (newUsers) => {
    return {
        type: SET_USERS,
        newUsers: newUsers
    }
}
export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}


export default usersReducer;