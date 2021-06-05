import { createSelector } from "reselect";

const getUsers = (state) => state.usersData.users;
const getPerPage = (state) => state.usersData.perPage;
const getSearchTerm = (state) => state.usersData.searchTerm;
const getSearchFollowed = (state) => state.usersData.searchFollowed;
const getCurrentPage = (state) => state.usersData.currentPage;
const getTotalUsersCount = (state) => state.usersData.totalUsersCount;
const getIsFetching = (state) => state.usersData.isFetching;
const getFollowingInProgress = (state) =>
  state.usersData.followingInProgress;

const getQueryParams = createSelector(
  getCurrentPage,
  getPerPage,
  getSearchTerm,
  getSearchFollowed,
  (currentPage, perPage, searchTerm, searchFollowed) => ({
    currentPage,
    perPage,
    searchTerm,
    searchFollowed,
  })
);

export default {
  getUsers,
  getPerPage,
  getSearchTerm,
  getSearchFollowed,
  getCurrentPage,
  getTotalUsersCount,
  getIsFetching,
  getFollowingInProgress,
  getQueryParams,
};
