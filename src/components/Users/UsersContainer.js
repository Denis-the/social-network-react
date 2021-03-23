import axios from 'axios';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setPerPageCount,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching
} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.loadPage(this.props.currentPage);
    }

    changePerPageCount = (newCount) => {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(1, newCount)
            .then(data => {
                const users = data.items;
                const totalUsersCount = data.totalCount;

                this.props.setPerPageCount(newCount);
                this.props.setUsers(users);
                this.props.setTotalUsersCount(totalUsersCount);
                this.props.setCurrentPage(1);
                this.props.toggleIsFetching(false);
            })
    }

    loadPage = (pageNumber) => {
        if (pageNumber < 1 || (pageNumber > this.props.pagesTotal && this.props.pagesTotal > 0)) return;
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.perPage).then( data => {
                const users = data.items;
                const totalUsersCount = data.totalCount;

                this.props.toggleIsFetching(false);
                this.props.setUsers(users);
                this.props.setTotalUsersCount(totalUsersCount);
                this.props.setCurrentPage(pageNumber);
            })
    }

    followAction = (userId) => {
        this.props.toggleIsFetching(true);
        usersAPI.followUser(userId).then(
                data => {
                    this.props.toggleIsFetching(false);
                    if (data.resultCode === 0) this.props.follow(userId)
                }
            )
    }

    unfollowAction = (userId) => {
        this.props.toggleIsFetching(true);
        usersAPI.unfollowUser(userId).then(
            data => {
                this.props.toggleIsFetching(false);
                if (data.resultCode === 0) this.props.unfollow(userId);
            }
        )
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader/> :  null }

                <Users
                    users={this.props.users}
                    pagesTotal={this.props.pagesTotal}
                    currentPage={this.props.currentPage}
                    follow={this.followAction}
                    unfollow={this.unfollowAction}
                    loadPage={this.loadPage}
                    changePerPageCount={this.changePerPageCount}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        perPage: state.usersReducer.perPage,
        currentPage: state.usersReducer.currentPage,
        totalUsersCount: state.usersReducer.totalUsersCount,
        isFetching: state.usersReducer.isFetching,
        pagesTotal: Math.ceil(state.usersReducer.totalUsersCount / state.usersReducer.perPage),
    }
}

const UsersContainer = connect(mapStateToProps, 
    { follow, unfollow, setUsers, setPerPageCount, setTotalUsersCount, setCurrentPage, toggleIsFetching })
    (UsersAPIComponent);

export default UsersContainer;