import types from "./types";

const setPerPageCount = (perPage) => ({
  type: types.SET_PER_PAGE_COUNT,
  payload: {perPage},
});
const setTotalUsersCount = (totalUsersCount) => ({
  type: types.SET_TOTAL_USERS_COUNT,
  payload: {totalUsersCount},
});
const setCurrentPage = (currentPage) => ({
  type: types.SET_CURRENT_PAGE,
  payload: {currentPage},
});
const setUsers = (users) => ({
  type: types.SET_USERS,
  payload: {users},
});
const setSearchTerm = (searchTerm) => ({
  type: types.SET_SEARCH_TERM,
  payload: {searchTerm},
});
const setSearchFollowed = (searchFollowed) => ({
  type: types.SET_SEARCH_FOLLOWED,
  payload: {searchFollowed},
});
const follow = (userId) => ({ type: types.FOLLOW, payload: {userId} });
const unfollow = (userId) => ({ type: types.UNFOLLOW, payload: {userId} });
const toggleIsFetching = (isFetching) => ({
  type: types.TOGGLE_IS_FETCHING,
  payload: {isFetching},
});
const addFollowingProgress = (userId) => ({
  type: types.ADD_FOLLOWING_IN_PROGRESS,
  payload: {userId},
});
const deleteFollowingProgress = (userId) => ({
  type: types.DELETE_FOLLOWING_IN_PROGRESS,
  payload: {userId},
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
  setPerPageCount
};
