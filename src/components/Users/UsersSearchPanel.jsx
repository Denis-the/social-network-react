import React from 'react'
import { useRequestUsersHandler } from '../../hooks/usersHooks'
import SearchUsersForm from '../forms/SearchUsersForm';
import UsersPageNav from './UsersPagination';


const UsersSearchPanel = React.memo(({ ...props }) => {
    const requestUsersHandler = useRequestUsersHandler()
    return (
        <div className="users__search-panel">
            <UsersPageNav requestUsersHandler={requestUsersHandler} {...props} />
            <SearchUsersForm {...props} submitAction={requestUsersHandler.requestUsers}/>
        </div>
    )
})

export default UsersSearchPanel