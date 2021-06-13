import { UserIdType } from "../auth/types";
import types, { UserType } from "./types";

type SetPerPageCountActionType = {
  type: typeof types.SET_PER_PAGE_COUNT;
  payload: { perPage: number };
};
const setPerPageCount = (perPage: number): SetPerPageCountActionType => ({
  type: types.SET_PER_PAGE_COUNT,
  payload: { perPage },
});

type SetTotalUsersCountActionType = {
  type: typeof types.SET_TOTAL_USERS_COUNT;
  payload: { totalUsersCount: number };
};

const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
  type: types.SET_TOTAL_USERS_COUNT,
  payload: { totalUsersCount },
});

type SetCurrentPageActionType = {
  type: typeof types.SET_CURRENT_PAGE;
  payload: { currentPage: number };
};
const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: types.SET_CURRENT_PAGE,
  payload: { currentPage },
});

type SetUsersActionType = {
  type: typeof types.SET_USERS;
  payload: { users: Array<UserType> };
};
const setUsers = (users: Array<UserType>): SetUsersActionType => ({
  type: types.SET_USERS,
  payload: { users },
});

type SetSearchTermActionType = {
  type: typeof types.SET_SEARCH_TERM;
  payload: { searchTerm: string | null };
};

const setSearchTerm = (searchTerm: string | null): SetSearchTermActionType => ({
  type: types.SET_SEARCH_TERM,
  payload: { searchTerm },
});

type SetSearchFollowedActionType = {
  type: typeof types.SET_SEARCH_FOLLOWED;
  payload: { searchFollowed: boolean | null };
};
const setSearchFollowed = (searchFollowed: boolean | null): SetSearchFollowedActionType => ({
  type: types.SET_SEARCH_FOLLOWED,
  payload: { searchFollowed },
});

type FollowActionType = {
  type: typeof types.FOLLOW;
  payload: { userId: UserIdType };
};

const follow = (userId: UserIdType): FollowActionType => ({ type: types.FOLLOW, payload: { userId } });

type UnfollowActionType = {
  type: typeof types.UNFOLLOW;
  payload: { userId: UserIdType };
};

const unfollow = (userId: UserIdType): UnfollowActionType => ({ type: types.UNFOLLOW, payload: { userId } });

type ToggleIsFetchingActionType = {
  type: typeof types.TOGGLE_IS_FETCHING;
  payload: { isFetching: boolean };
};

const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
  type: types.TOGGLE_IS_FETCHING,
  payload: { isFetching },
});

type AddFollowingProgressActionType = {
  type: typeof types.ADD_FOLLOWING_IN_PROGRESS;
  payload: { userId: UserIdType };
};

const addFollowingProgress = (userId: UserIdType): AddFollowingProgressActionType => ({
  type: types.ADD_FOLLOWING_IN_PROGRESS,
  payload: { userId },
});

type DeleteFollowingProgressActionType = {
  type: typeof types.DELETE_FOLLOWING_IN_PROGRESS;
  payload: { userId: UserIdType };
};

const deleteFollowingProgress = (userId: UserIdType): DeleteFollowingProgressActionType => ({
  type: types.DELETE_FOLLOWING_IN_PROGRESS,
  payload: { userId },
});

export default {
  deleteFollowingProgress,
  addFollowingProgress,
  toggleIsFetching,
  unfollow,
  follow,
  setSearchFollowed,
  setSearchTerm,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setPerPageCount,
};
