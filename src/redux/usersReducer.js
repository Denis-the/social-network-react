const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";


const initialUsersState = {
    users: [],
}


const usersReducer = (state = initialUsersState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.newUsers]}
        }
        case FOLLOW: {
            const stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, isFollowing: true}
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

export const setUsersActionCreator = (newUsers) => {
    return {
        type: SET_USERS,
        newUsers:newUsers
    }
}
export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}


export default usersReducer;