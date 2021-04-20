import React from 'react';
import { useFollowUsersHandler } from '../../hooks/users/usersHooks';
import s from './Users.module.css';
import UsersItem from './UsersItem/UsersItem';
import UsersSearchPanel from './UsersSearchPanel/UsersSearchPanel';

const Users = React.memo(({users, currentPage, perPage, searchTerm, searchFollowed, pagesTotal, 
    isFetching, ...props}) => {
    
    const followUserHandler = useFollowUsersHandler()
    
    const usersJXS = users.map((user) => (
        <UsersItem
            key={user.id}
            user={user}
            follow={followUserHandler.requestFollowUser}
            unfollow={followUserHandler.requestUnfollowUser}
            
        />
    ))

    return (
        <div>
            <UsersSearchPanel 
            currentPage={currentPage} perPage={perPage} searchTerm={searchTerm} searchFollowed={searchFollowed}
            />
            <div className='usersContainer'>
                {usersJXS}
            </div>
        </div>
    )
})

export default Users;


