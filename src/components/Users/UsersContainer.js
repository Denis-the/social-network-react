import axios from 'axios';
import {connect} from 'react-redux';
import { followAC, 
    unfollowAC, 
    setUsersAC, 
    setPerPageCountAC, 
    setTotalUsersCountAC, 
    setCurrentPageAC } from '../../redux/usersReducer';
import Users from './Users';


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
        changePerPageCount (newCount) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${newCount}`)
            .then(response => {
                const users = response.data.items;
                const totalUsersCount = response.data.totalCount;

                dispatch(setUsersAC(users));
                dispatch(setPerPageCountAC(newCount));
                dispatch(setTotalUsersCountAC(totalUsersCount));
                dispatch(setCurrentPageAC(1))
            })  
        },

        loadPage (pageNumber) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.perPage}`)
            .then(response => {
                const users = response.data.items;
                const totalUsersCount = response.data.totalCount;

                dispatch(setUsersAC(users));
                dispatch(setTotalUsersCountAC(totalUsersCount));
                dispatch(setCurrentPageAC(pageNumber))
            })  
        
        },

        follow (userId) {
            const action = followAC(userId);
            dispatch(action);
        },

        unfollow (userId) {
            const action = unfollowAC(userId);
            dispatch(action);
        },
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;