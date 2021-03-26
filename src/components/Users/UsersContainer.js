import { connect } from 'react-redux';
import { getUsersTC, followTC, unfollowTC } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.loadPage(this.props.currentPage);
    }

    changePerPageCount = (newCount) => {
        this.props.getUsersTC(1, newCount, this.props.pagesTotal)
    }

    loadPage = (pageNumber) => {      
        this.props.getUsersTC(pageNumber, this.props.perPage, this.props.pagesTotal)
    }

    followAction = (userId) => {
        this.props.followTC(userId);
    }

    unfollowAction = (userId) => {
        this.props.unfollowTC(userId);
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
        followingInProgress: state.usersReducer.followingInProgress,
        pagesTotal: Math.ceil(state.usersReducer.totalUsersCount / state.usersReducer.perPage),
    }
}


const UsersContainer = connect(mapStateToProps,{getUsersTC, followTC, unfollowTC})(UsersAPIComponent);

export default UsersContainer;