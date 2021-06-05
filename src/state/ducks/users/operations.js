import { usersAPI } from "../../../api/api";
import actions from "./actions";

const {
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
} = actions;

const fetchUsers =
  ({ page = 1, perPage = 10, term = null, followed = null }) =>
  async (dispatch) => {
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
  };

const followUnfollowFlow = async (
  dispatch,
  getState,
  userId,
  APIMethod,
  action
) => {
  if (getState().usersReducer.followingInProgress.has(userId)) return;
  dispatch(addFollowingProgress(userId));
  const data = await APIMethod(userId);
  dispatch(deleteFollowingProgress(userId));
  if (data.resultCode === 0) dispatch(action);
};

const followTC = (userId) => async (dispatch, getState) => {
  const APIMethod = usersAPI.followUser.bind(usersAPI);
  const action = follow(userId);
  followUnfollowFlow(dispatch, getState, userId, APIMethod, action);
};

const unfollowTC = (userId) => async (dispatch, getState) => {
  const APIMethod = usersAPI.unfollowUser.bind(usersAPI);
  const action = unfollow(userId);
  followUnfollowFlow(dispatch, getState, userId, APIMethod, action);
};

export default {
    fetchUsers,
    followUnfollowFlow,
    followTC,
    unfollowTC,
}