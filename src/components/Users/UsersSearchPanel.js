import React from 'react'
import { Field, Form } from 'react-final-form'
import { useRequestUsersHandler } from '../../hooks/users/usersHooks'
import { ButtonFE, InputFE, SingleSelectButtonsFE } from '../common/FormElems/PrimeReactFormElems'
import UsersPageNav from './UsersPagination';

const UsersSearchForm = ({ submitAction, currentPage, perPage, searchTerm, searchFollowed, isFetching }) => {

    return (
        <Form
            onSubmit={fields => submitAction(fields)}
            initialValues={{ term: searchTerm, followed: searchFollowed, perPage: perPage }}>
            {({ form, handleSubmit, submitError }) => (
                <form onSubmit={handleSubmit}>
                    <div className='p-d-inline-flex'>
                        <Field name='term' component={InputFE} id='Search Term' className='p-inputtext-sm' />
                        <Field name='followed' component={SingleSelectButtonsFE} id='SearchFollowed'
                            className='p-d-inline-flex p-button-sm' disabled={isFetching}
                            options={[{ name: 'OFF', value: null, className: 'p-button-sm' }, { name: 'ON', value: true, className: 'p-button-sm' }]}
                            value={searchFollowed} optionLabel="name" />
                        <Field name='submit' component={ButtonFE} type='submit'>Search</Field>
                    </div>
                </form>
            )}
        </Form>
    )
}



const UsersSearchPanel = React.memo(({ ...props }) => {
    const requestUsersHandler = useRequestUsersHandler()
    return (
        <div className="users__search-panel">
            <UsersPageNav requestUsersHandler={requestUsersHandler}
                {...props} />
            <UsersSearchForm
                {...props}
                submitAction={requestUsersHandler.requestUsers}
            ></UsersSearchForm>
            
        </div>
    )
})

export default UsersSearchPanel