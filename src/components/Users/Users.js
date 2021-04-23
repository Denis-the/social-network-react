import s from './Users.module.css';
import React from 'react';
import { useFollowUsersHandler } from '../../hooks/users/usersHooks';
import UserItem from './UserItem';
import UsersSearchPanel from './UsersSearchPanel';

const Users = React.memo(({users, isFetching, followingInProgress,
    currentPage, perPage, searchTerm, searchFollowed, pagesTotal, ...props}) => {
    const followUserHandler = useFollowUsersHandler();
    
    return (
        <div className='users-wrapper'>
            <UsersSearchPanel 
            currentPage={currentPage} perPage={perPage} searchTerm={searchTerm} searchFollowed={searchFollowed}
            />
            <div className='usersContainer'>
                {users.map((user) => (
                <UserItem key={user.id} user={user} followingInProgress={followingInProgress}
                    follow={followUserHandler.requestFollowUser} unfollow={followUserHandler.requestUnfollowUser}/>
                ))}
            </div>
        </div>
    )
})

export default Users;


