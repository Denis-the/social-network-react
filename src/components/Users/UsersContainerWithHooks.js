import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {  getFollowingInProgress, getIsFetching, getPerPage, getTotalUsersCount, 
    getUsers, getQueryParams } from '../../redux/selectors/usersSelectors';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import { useRequestUsersHandler } from '../../hooks/users/usersHooks';
 




const useConnect = () => {
    const queryParams = useSelector(getQueryParams);
    const users = useSelector(getUsers);
    const isFetching = useSelector(getIsFetching);
    const followingInProgress = useSelector(getFollowingInProgress);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const pagesTotal = Math.ceil(totalUsersCount / queryParams.perPage);

    const requestUsersHandler = useRequestUsersHandler()

    return {users, queryParams, isFetching, followingInProgress, pagesTotal, requestUsersHandler,}
}


const UsersContainer = (props) => {
    const {users,  pagesTotal, isFetching, followingInProgress,  queryParams, requestUsersHandler} = useConnect();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (users.length !== 0) return;
        let initPage, initPerPage, initTerm, initFollowed;
        const params = new URLSearchParams(location.search);
        
        initPage = parseInt(params.get('page')) || queryParams.currentPage;
        initPerPage = parseInt(params.get('per_page')) || queryParams.perPage;
        initTerm = params.get('search_term') || queryParams.searchTerm;
        initFollowed = params.get('followed') || queryParams.searchFollowed;

        requestUsersHandler.requestUsers({page: initPage, perPage: initPerPage, followed: initFollowed, term: initTerm})
    }, [])

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        if (params.get('page') || queryParams.currentPage != 1) params.set('page', queryParams.currentPage);
        if (params.get('per_page') || queryParams.perPage != 10) params.set('per_page', queryParams.perPage);
        if (queryParams.searchTerm != null) params.set('search_term', queryParams.searchTerm);
        else  params.delete('search_term');
        if (queryParams.searchFollowed != null) params.set('followed', queryParams.searchFollowed);
        else params.delete('followed');;

        
        history.push({search:params.toString()})
    }, [queryParams])

    return (
        <>
            { isFetching ? <Preloader/> :  null }
            <Users users={users} pagesTotal={pagesTotal}  isFetching={isFetching} {...queryParams}/>
        </>
    )
}

export default UsersContainer