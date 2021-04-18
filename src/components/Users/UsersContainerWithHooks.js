import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchUsers, followTC, unfollowTC } from '../../redux/usersReducer';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPerPage, getTotalUsersCount, 
    getUsers, getSearchTerm, getSearchFollowed, getQueryParams } from '../../redux/selectors/usersSelectors';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';


const useConnect = () => {
    const queryParams = useSelector(getQueryParams);
    const users = useSelector(getUsers);
    const isFetching = useSelector(getIsFetching);
    const followingInProgress = useSelector(getFollowingInProgress);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const pagesTotal = Math.ceil(totalUsersCount / queryParams.perPage);

    const dispatch = useDispatch();

    const followUserHandler = {
        requestFollowUser(userId) {dispatch(followTC(userId))},
        requestUnfollowUser(userId) {dispatch(unfollowTC(userId))},
    }

    const {currentPage, perPage, searchTerm, searchFollowed} = queryParams 
    const requestUsersHandler = {
        requestUsers({page, perPage, term, followed}) {dispatch(fetchUsers({page, perPage, term, followed}))},
        changePerPageCount(perPage) {this.requestUsers({page:1, perPage, term:searchTerm, followed:searchFollowed})},
        requestPage(page) {this.requestUsers({page, perPage:perPage, term:searchTerm, followed:searchFollowed})},
        requestFirstPage() {this.requestUsers({page: 1, perPage:perPage, term:searchTerm, followed:searchFollowed})},
        requestLastPage() {this.requestUsers({page: pagesTotal, perPage:perPage, term:searchTerm, followed:searchFollowed})},
        requestNextPage() {this.requestUsers({page: currentPage+1, perPage:perPage, term:searchTerm, followed:searchFollowed})},
        requestPrevPage() {this.requestUsers({page: currentPage-1, perPage:perPage, term:searchTerm, followed:searchFollowed})},
    }
    requestUsersHandler.requestUsers = requestUsersHandler.requestUsers.bind(requestUsersHandler);
    requestUsersHandler.changePerPageCount = requestUsersHandler.changePerPageCount.bind(requestUsersHandler);
    requestUsersHandler.requestPage = requestUsersHandler.requestPage.bind(requestUsersHandler);
    requestUsersHandler.requestFirstPage = requestUsersHandler.requestFirstPage.bind(requestUsersHandler);
    requestUsersHandler.requestLastPage = requestUsersHandler.requestLastPage.bind(requestUsersHandler);
    requestUsersHandler.requestNextPage = requestUsersHandler.requestNextPage.bind(requestUsersHandler);
    requestUsersHandler.requestPrevPage = requestUsersHandler.requestPrevPage.bind(requestUsersHandler);

    return {users, queryParams,
        isFetching, followingInProgress, pagesTotal, 
        requestUsersHandler, followUserHandler,}
}


const UsersContainer = () => {
    const {users,  pagesTotal, isFetching, followingInProgress,  queryParams,
        requestUsersHandler, followUserHandler} = useConnect();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        // if (users) return;
        let initPage, initPerPage, initTerm, initFollowed;
        const params = new URLSearchParams(location.search);
        
        if (parseInt(params.get('page'))) initPage = parseInt(params.get('page'));
        if (parseInt(params.get('per_page'))) initPerPage = parseInt(params.get('per_page'));
        if (params.get('search_term')) initTerm = params.get('search_term');
        if (params.get('followed')) initFollowed = params.get('followed');

        requestUsersHandler.requestUsers({page: initPage, perPage: initPerPage, followed: initFollowed, term: initTerm})
    }, [])

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        if (params.get('page') || queryParams.currentPage != 1) params.set('page', queryParams.currentPage);
        if (params.get('per_page') || queryParams.perPage != 10) params.set('per_page', queryParams.perPage);
        if (params.get('search_term') || queryParams.searchTerm != null) params.set('search_term', queryParams.searchTerm);
        if (params.get('followed') || queryParams.searchFollowed != null) params.set('followed', queryParams.searchFollowed); 

        history.push({search:params.toString()})
    }, [queryParams])

    return (
        <>
            { isFetching ? <Preloader/> :  null }
            <Users users={users} pagesTotal={pagesTotal}  isFetching={isFetching}
                {...queryParams}
                // currentPage={queryParams.currentPage} perPage={queryParams.perPage}
                // searchTerm={queryParams.searchTerm} searchFollowed={queryParams.searchFollowed}
                requestUsersHandler={requestUsersHandler} followUserHandler={followUserHandler}
            />
        </>
    )
}

export default UsersContainer