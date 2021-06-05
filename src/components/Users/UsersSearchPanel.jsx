import React from 'react'
import SearchUsersForm from '../forms/SearchUsersForm';
import UsersPageNav from './UsersPagination';

const UsersSearchPanel = React.memo(({ requestUsersHandler, ...props }) => (
        <div className="users__search-panel">
            <UsersPageNav requestUsersHandler={requestUsersHandler} {...props} />
            <SearchUsersForm {...props} submitAction={requestUsersHandler.requestUsers}/>
        </div>
    )
)

export default UsersSearchPanel