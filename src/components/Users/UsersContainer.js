import {connect} from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer';
import Users from './Users';


const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=> {
            const action = followActionCreator(userId);
            dispatch(action);
        },
        
        unfollow: (userId)=> {
            const action = unfollowActionCreator(userId);
            dispatch(action);
        },
        setUsers: (newUsers) => {
            const action = setUsersActionCreator(newUsers);
            dispatch(action)
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;