import { updateObjectInArray } from "../../../utils/object-helpers";
import types from "./types";

const initialUsersState = {
  users: [],
  searchTerm: null,
  searchFollowed: null,
  perPage: 10,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: false,
  followingInProgress: new Set(),
};

const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
    case types.SET_SEARCH_FOLLOWED:
    case types.SET_CURRENT_PAGE:
    case types.SET_TOTAL_USERS_COUNT:
    case types.SET_PER_PAGE_COUNT:
    case types.TOGGLE_IS_FETCHING:
    case types.SET_USERS: {
      return { ...state, ...action.payload };
    }

    case types.FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload.userId, "id", {
          followed: true,
        }),
      };
    }

    case types.UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload.userId, "id", {
          followed: false,
        }),
      };
    }
    
    case types.ADD_FOLLOWING_IN_PROGRESS: {
      const setCopy = new Set(state.followingInProgress);
      setCopy.add(action.payload.userId);
      return { ...state, followingInProgress: setCopy };
    }

    case types.DELETE_FOLLOWING_IN_PROGRESS: {
      const setCopy = new Set(state.followingInProgress);
      setCopy.delete(action.payload.userId);
      return { ...state, followingInProgress: setCopy };
    }
  }

  return state;
};

export default usersReducer;
