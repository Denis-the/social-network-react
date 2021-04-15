export const getUsers = state =>  state.usersReducer.users;

export const getPerPage = state =>  state.usersReducer.perPage;

export const getSearchTerm = state => state.usersReducer.searchTerm;

export const getSearchFollowed = state => state.usersReducer.searchFollowed;

export const getCurrentPage = state => state.usersReducer.currentPage;

export const getTotalUsersCount = state => state.usersReducer.totalUsersCount;

export const getIsFetching = state =>  state.usersReducer.isFetching;

export const getFollowingInProgress = state => state.usersReducer.followingInProgress;

