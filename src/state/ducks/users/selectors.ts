import { createSelector } from "reselect";

const getUsers = (state: any) => state.usersData.users;
const getPerPage = (state: any) => state.usersData.perPage;
const getSearchTerm = (state: any) => state.usersData.searchTerm;
const getSearchFollowed = (state: any) => state.usersData.searchFollowed;
const getCurrentPage = (state: any) => state.usersData.currentPage;
const getTotalUsersCount = (state: any) => state.usersData.totalUsersCount;
const getIsFetching = (state: any) => state.usersData.isFetching;
const getFollowingInProgress = (state: any) =>
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
