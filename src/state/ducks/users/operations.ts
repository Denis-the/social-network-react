import { string } from "prop-types";
import { AppDispatchType } from "state/store";
import { usersAPI } from "../../../api/api";
import { UserIdType } from "../auth/types";
import { notificationsOperations } from "../notifications";
import actions from "./actions";
import { FetchUsersArgType } from "./types";

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
  ({ page = 1, perPage = 10, term = null, followed = null }: FetchUsersArgType) =>
  async (dispatch: AppDispatchType) => {
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
      dispatch(setSearchFollowed(followed));
    } catch (err) {
      dispatch(notificationsOperations.showNotification("error", err.message));
    }
    dispatch(toggleIsFetching(false));
  };

const followUnfollowFlow = async (
  dispatch: AppDispatchType,
  getState: Function,
  userId: UserIdType,
  APIMethod: Function,
  action: Object
) => {
  if (getState().usersData.followingInProgress.has(userId)) return;
  dispatch(addFollowingProgress(userId));
  const data = await APIMethod(userId);
  dispatch(deleteFollowingProgress(userId));
  if (data.resultCode === 0) dispatch(action);
};

const followTC = (userId: UserIdType) => async (dispatch: AppDispatchType, getState: Function) => {
  const APIMethod = usersAPI.followUser.bind(usersAPI);
  const action = follow(userId);
  followUnfollowFlow(dispatch, getState, userId, APIMethod, action);
};

const unfollowTC = (userId: UserIdType) => async (dispatch: AppDispatchType, getState: Function) => {
  const APIMethod = usersAPI.unfollowUser.bind(usersAPI);
  const action = unfollow(userId);
  followUnfollowFlow(dispatch, getState, userId, APIMethod, action);
};

export default {
  fetchUsers,
  followUnfollowFlow,
  followTC,
  unfollowTC,
};
