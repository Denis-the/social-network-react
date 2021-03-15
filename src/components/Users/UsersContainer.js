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
import preloader from '../../assets/images/preloader.svg'
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.loadPage(this.props.currentPage);
    }

    changePerPageCount = (newCount) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${newCount}`)
            .then(response => {
                const users = response.data.items;
                const totalUsersCount = response.data.totalCount;

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.perPage}`)
            .then(response => {
                const users = response.data.items;
                const totalUsersCount = response.data.totalCount;

                this.props.toggleIsFetching(false);
                this.props.setUsers(users);
                this.props.setTotalUsersCount(totalUsersCount);
                this.props.setCurrentPage(pageNumber);
            })
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader/> :  null }

                <Users
                    users={this.props.users}
                    pagesTotal={this.props.pagesTotal}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
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