import { connect, useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { getUsersTC, followTC, unfollowTC } from '../../redux/usersReducer';
import {withRouter, useLocation} from 'react-router-dom';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPerPage, getTotalUsersCount, getUsers } from '../../redux/selectors/usersSelectors';

const useConnect = () => {
    const users = useSelector(getUsers);
    const perPage = useSelector(getPerPage);
    const currentPage = useSelector(getCurrentPage);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const isFetching = useSelector(getIsFetching);
    const followingInProgress = useSelector(getFollowingInProgress);
    const pagesTotal = Math.ceil(totalUsersCount / perPage);

    const dispatch = useDispatch();
    const requestUsers = (page, perPage) => dispatch(getUsersTC(page, perPage));
    const requestChangePerPage = (count) => dispatch(getUsersTC(1, count, pagesTotal));
    const requestFollowUser = (userId) => dispatch(followTC(userId));
    const requestUnfollowUser = (userId) => dispatch(unfollowTC(userId));

    return {users, perPage, currentPage, totalUsersCount, isFetching, followingInProgress, pagesTotal,
        requestUsers, requestChangePerPage, requestFollowUser, requestUnfollowUser,
    }
}


const UsersContainer = (props) => {
    const {users, perPage, currentPage, totalUsersCount, isFetching, followingInProgress, pagesTotal,
        requestUsers, requestChangePerPage, requestFollowUser, requestUnfollowUser,
    } = useConnect();

    const location = useLocation();
    console.log(location)

    useEffect(()=> {
        const params = new URLSearchParams(location.search);
        const page = params.get('page') || 1;
        const perPage = params.get('per_page') || 10;

        requestUsers(page, perPage)

    }, [])

    // console.log(location);

    return (
        <>
            { isFetching ? <Preloader/> :  null }

            <Users
                users={users}
                pagesTotal={pagesTotal}
                currentPage={currentPage}
                follow={requestFollowUser}
                unfollow={requestUnfollowUser}
                loadPage={requestUsers}
                changePerPageCount={requestChangePerPage}
            />
        </>
    )
}


// class UsersContainer extends React.Component {
//     componentDidMount() {
//         this.loadPage(this.props.currentPage);
//     }

//     changePerPageCount = (newCount) => {
//         this.props.getUsersTC(1, newCount, this.props.pagesTotal)
//     }

//     loadPage = (pageNumber) => {      
//         this.props.getUsersTC(pageNumber, this.props.perPage, this.props.pagesTotal)
//     }

//     followAction = (userId) => {
//         this.props.followTC(userId);
//     }

//     unfollowAction = (userId) => {
//         this.props.unfollowTC(userId);
//     }

//     render() {
//         return (
//             <>
//                 { this.props.isFetching ? <Preloader/> :  null }

//                 <Users
//                     users={this.props.users}
//                     pagesTotal={this.props.pagesTotal}
//                     currentPage={this.props.currentPage}
//                     follow={this.followAction}
//                     unfollow={this.unfollowAction}
//                     loadPage={this.loadPage}
//                     changePerPageCount={this.changePerPageCount}
//                 />
//             </>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        perPage: state.usersReducer.perPage,
        currentPage: state.usersReducer.currentPage,
        totalUsersCount: state.usersReducer.totalUsersCount,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress,
        pagesTotal: Math.ceil(state.usersReducer.totalUsersCount / state.usersReducer.perPage),
    }
}


// const UsersContainer = connect(mapStateToProps,{getUsersTC, followTC, unfollowTC})(UsersAPIComponent);
// export default UsersContainer;

export default compose(
    connect(mapStateToProps,{getUsersTC, followTC, unfollowTC}),
    withRouter,
)(UsersContainer)