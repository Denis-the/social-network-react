import s from './Users.module.css';
import React from 'react';
import { useFollowUsersHandler } from '../../hooks/users/usersHooks';
import UserItem from './UserItem';
import UsersSearchPanel from './UsersSearchPanel';

const Users = React.memo(({users, isFetching, followingInProgress,
    currentPage, perPage, searchTerm, searchFollowed, pagesTotal, totalUsersCount, ...props}) => {
    const followUserHandler = useFollowUsersHandler();
    
    return (
        <div className='users__wrapper'>
            <div className='users__header'><h3>Users</h3>&nbsp;<span>({totalUsersCount || 0} found)</span></div>
            
            <div className='users-item__container'>
                {users.map((user) => (
                <UserItem key={user.id} user={user} followingInProgress={followingInProgress}
                    follow={followUserHandler.requestFollowUser} unfollow={followUserHandler.requestUnfollowUser}/>
                ))}
            </div>

            <UsersSearchPanel searchFollowed={searchFollowed} isFetching={isFetching} pagesTotal={pagesTotal}
            currentPage={currentPage} perPage={perPage} searchTerm={searchTerm} />
        </div>
    )
})

export default Users;


