import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchUsers, followTC, unfollowTC } from '../../redux/usersReducer';
import { useLocation, useHistory } from 'react-router-dom';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, 
    getPerPage, getTotalUsersCount, getUsers, getSearchTerm, getSearchFollowed } from '../../redux/selectors/usersSelectors';

const useConnect = () => {
    const users = useSelector(getUsers);
    const searchTerm = useSelector(getSearchTerm);
    const searchFollowed = useSelector(getSearchFollowed);
    const perPage = useSelector(getPerPage);
    const currentPage = useSelector(getCurrentPage);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const isFetching = useSelector(getIsFetching);
    const followingInProgress = useSelector(getFollowingInProgress);
    const pagesTotal = Math.ceil(totalUsersCount / perPage);

    const dispatch = useDispatch();
    const requestUsers = ({page, perPage, term, followed}) => dispatch(fetchUsers({page, perPage, term, followed}));
    const requestFollowUser = (userId) => dispatch(followTC(userId));
    const requestUnfollowUser = (userId) => dispatch(unfollowTC(userId));

    return {users, perPage, searchTerm, searchFollowed, currentPage, 
        isFetching, followingInProgress, pagesTotal,
        requestUsers, requestFollowUser, requestUnfollowUser}
}


const UsersContainer = (props) => {
    const {users, perPage, searchTerm, searchFollowed, currentPage, 
        isFetching, followingInProgress, pagesTotal,
        requestUsers, requestFollowUser, requestUnfollowUser} = useConnect();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        let initPage, initPerPage, initTerm, initFollowed;
        const params = new URLSearchParams(location.search);
        
        if (parseInt(params.get('page'))) initPage = parseInt(params.get('page'));
        if (parseInt(params.get('per_page'))) initPerPage = parseInt(params.get('per_page'));
        if (params.get('search_term')) initTerm = params.get('search_term');
        if (params.get('followed')) initFollowed = params.get('followed');

        requestUsers({page: initPage, perPage: initPerPage, followed: initFollowed, initTerm: initTerm})
    }, [])

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        if (params.get('page') && currentPage != 1) params.set('page', currentPage);
        if (params.get('per_page') && perPage != 10) params.set('per_page', perPage);
        if (params.get('search_term') && searchTerm != null) params.set('search_term', searchTerm);
        if (params.get('followed') && searchFollowed != null) params.set('followed', searchFollowed); 

        history.push({search:params.toString()})
    }, [currentPage, perPage, searchTerm, searchFollowed])

    return (
        <>
            <button onClick={() => requestUsers({page:currentPage+1, perPage, term:searchTerm, followed:searchFollowed}) }>next</button>
            { isFetching ? <Preloader/> :  null }
            <Users users={users} pagesTotal={pagesTotal} currentPage={currentPage}
                follow={requestFollowUser} unfollow={requestUnfollowUser} loadPage={requestUsers}
                changePerPageCount={requestUsers}/>
        </>
    )
}

export default UsersContainer