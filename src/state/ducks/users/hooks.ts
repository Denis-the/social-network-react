import { useDispatch, useSelector } from "react-redux";
import usersSelectors from "./selectors";
import usersOperations from "./operations";
import { FetchUsersArgType } from "./types";
import { UserIdType } from "../auth/types";

const { getQueryParams, getTotalUsersCount } = usersSelectors;
const { fetchUsers, followTC, unfollowTC } = usersOperations;

const useRequestUsersHandler = () => {
  const { currentPage, perPage: perPageCurrent, searchTerm, searchFollowed } = useSelector(getQueryParams);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pagesTotal = Math.ceil(totalUsersCount / perPageCurrent);
  const dispatch = useDispatch();

  const requestUsersHandler = {
    requestUsers({
      page,
      perPage,
      term,
      followed,
    }: FetchUsersArgType) {
      dispatch(fetchUsers({ page, perPage, term, followed }));
    },
    changePerPageCount(perPage: number) {
      this.requestUsers({
        page: 1,
        perPage,
        term: searchTerm,
        followed: searchFollowed,
      });
    },
    requestPage(page: number) {
      this.requestUsers({
        page,
        perPage: perPageCurrent,
        term: searchTerm,
        followed: searchFollowed,
      });
    },
    requestFirstPage() {
      this.requestUsers({
        page: 1,
        perPage: perPageCurrent,
        term: searchTerm,
        followed: searchFollowed,
      });
    },
    requestLastPage() {
      this.requestUsers({
        page: pagesTotal,
        perPage: perPageCurrent,
        term: searchTerm,
        followed: searchFollowed,
      });
    },
    requestNextPage() {
      this.requestUsers({
        page: currentPage + 1,
        perPage: perPageCurrent,
        term: searchTerm,
        followed: searchFollowed,
      });
    },
    requestPrevPage() {
      this.requestUsers({
        page: currentPage - 1,
        perPage: perPageCurrent,
        term: searchTerm,
        followed: searchFollowed,
      });
    },
  };
  requestUsersHandler.requestUsers = requestUsersHandler.requestUsers.bind(requestUsersHandler);
  requestUsersHandler.changePerPageCount = requestUsersHandler.changePerPageCount.bind(requestUsersHandler);
  requestUsersHandler.requestPage = requestUsersHandler.requestPage.bind(requestUsersHandler);
  requestUsersHandler.requestFirstPage = requestUsersHandler.requestFirstPage.bind(requestUsersHandler);
  requestUsersHandler.requestLastPage = requestUsersHandler.requestLastPage.bind(requestUsersHandler);
  requestUsersHandler.requestNextPage = requestUsersHandler.requestNextPage.bind(requestUsersHandler);
  requestUsersHandler.requestPrevPage = requestUsersHandler.requestPrevPage.bind(requestUsersHandler);

  return requestUsersHandler;
};

const useFollowUsersHandler = () => {
  const dispatch = useDispatch();
  return {
    requestFollowUser(userId: UserIdType) {
      dispatch(followTC(userId));
    },
    requestUnfollowUser(userId: UserIdType) {
      dispatch(unfollowTC(userId));
    },
  };
};

export default {
  useFollowUsersHandler,
  useRequestUsersHandler,
};
