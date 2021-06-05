import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { usersHooks, usersSelectors } from "../../state/ducks/users";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

const {useRequestUsersHandler, useFollowUsersHandler} = usersHooks
const {
  getFollowingInProgress,
  getIsFetching,
  getTotalUsersCount,
  getUsers,
  getQueryParams,
} = usersSelectors;

const UsersContainer = () => {
  const queryParams = useSelector(getQueryParams);
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pagesTotal = Math.ceil(totalUsersCount / queryParams.perPage);

  const isFetching = useSelector(getIsFetching);
  const followingInProgress = useSelector(getFollowingInProgress);
  const requestUsersHandler = useRequestUsersHandler();
  const followUserHandler = useFollowUsersHandler();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (users.length !== 0) return;
    const params = new URLSearchParams(location.search);
    const initPage = parseInt(params.get("page"), 10) || queryParams.currentPage;
    const initPerPage = parseInt(params.get("per_page"), 10) || queryParams.perPage;
    const initTerm = params.get("search_term", 10) || queryParams.searchTerm;
    const initFollowed = params.get("followed", 10) || queryParams.searchFollowed;

    requestUsersHandler.requestUsers({
      page: initPage,
      perPage: initPerPage,
      followed: initFollowed,
      term: initTerm,
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get("page") || queryParams.currentPage !== 1) {
        params.set("page", queryParams.currentPage);
    }   
    if (params.get("per_page") || queryParams.perPage !== 10) {
        params.set("per_page", queryParams.perPage);
    } 
    if (queryParams.searchTerm != null) {
        params.set("search_term", queryParams.searchTerm);
    } else { 
        params.delete("search_term");
    } 
    if (queryParams.searchFollowed != null) {
        params.set("followed", queryParams.searchFollowed);
    } else {
        params.delete("followed");
    } 
    history.push({ search: params.toString() });
  }, [queryParams]);

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        users={users}
        pagesTotal={pagesTotal}
        totalUsersCount={totalUsersCount}
        isFetching={isFetching}
        followingInProgress={followingInProgress}
        followUserHandler={followUserHandler}
        requestUsersHandler={requestUsersHandler}
        {...queryParams}
      />
    </>
  );
};

export default UsersContainer;
