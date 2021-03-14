import axios from 'axios';
import {connect} from 'react-redux';
import { followAC, 
    unfollowAC, 
    setUsersAC, 
    setPerPageCountAC, 
    setTotalUsersCountAC, 
    setCurrentPageAC } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.loadPage(this.props.currentPage);
    }

    changePerPageCount = (newCount) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${newCount}`)
        .then(response => {
            const users = response.data.items;
            const totalUsersCount = response.data.totalCount;
            
            this.props.setPerPageCount(newCount);
            this.props.setUsers(users);
            this.props.setTotalUsersCount(totalUsersCount);
            this.props.setCurrentPage(1);
        })  
    }

    loadPage = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.perPage}`)
        .then(response => {
            const users = response.data.items;
            const totalUsersCount = response.data.totalCount;

            this.props.setUsers(users);
            this.props.setTotalUsersCount(totalUsersCount);
            this.props.setCurrentPage(pageNumber);
        })  
    }

    render() {
        return <Users
        users={this.props.users}
        pagesTotal={this.props.pagesTotal}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        loadPage={this.loadPage}
        changePerPageCount={this.changePerPageCount}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        perPage: state.usersReducer.perPage,
        currentPage:state.usersReducer.currentPage,
        totalUsersCount: state.usersReducer.totalUsersCount,
        pagesTotal: Math.ceil(state.usersReducer.totalUsersCount / state.usersReducer.perPage),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPerPageCount(count) {
            dispatch(setPerPageCountAC(count))
        },

        setCurrentPage(pageNumber){
            dispatch(setCurrentPageAC(pageNumber));
        },

        setTotalUsersCount(totalUsersCount) {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },

        setUsers(users){
            dispatch(setUsersAC(users));
        },

        follow (userId) {
            dispatch(followAC(userId));
        },

        unfollow (userId) {
            dispatch(unfollowAC(userId));
        },
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;