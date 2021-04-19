import s from './Users.module.css';
import UsersItem from './UsersItem/UsersItem';
import UsersSearchPanel from './UsersSearchPanel/UsersSearchPanel';

const Users = ({users, currentPage, perPage, searchTerm, searchFollowed, pagesTotal, requestUsersHandler, 
    followUserHandler, isFetching, ...props}) => {
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
            <UsersSearchPanel requestUsersHandler={requestUsersHandler}
            currentPage={currentPage} perPage={perPage} searchTerm={searchTerm} searchFollowed={searchFollowed}
            />
            <div className='usersContainer'>
                {usersJXS}
            </div>
        </div>
    )
}

export default Users;


