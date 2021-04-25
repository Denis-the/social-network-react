import React from 'react'
import { Field, Form } from 'react-final-form'
import { useRequestUsersHandler } from '../../hooks/users/usersHooks'
import { InputFormElem, SelectFormElem } from '../common/FormElems/FormElems'
import UsersPageNav from './UsersPagination'

const UsersSearchForm = ({submitAction, currentPage, perPage, searchTerm, searchFollowed}) => {

    return (
        <Form
        onSubmit={ (fields) => {
            submitAction(fields);
        } }
        initialValues={{term:searchTerm, followed:searchFollowed, perPage:perPage}}
        > 
        {({form, handleSubmit, submitError}) => (
                <form onSubmit={handleSubmit}>
                <label>search term:</label>
                <Field name='term' component={InputFormElem}/>
                
                <label>only followed:</label>
                <Field name='followed' component={SelectFormElem} value={true}>
                        <option value={true}>Yes</option>
                        <option value={''}>No</option>
                </Field>

                <Field name='submit' component='button' type='submit'>Search</Field><br/>
            </form>
        )}
        </Form>
    )
}



const UsersSearchPanel = React.memo(({...props}) => {
    const requestUsersHandler = useRequestUsersHandler()
    return (
        <div className="users__search-panel">
            <UsersSearchForm
                {...props}
            submitAction={requestUsersHandler.requestUsers}
            ></UsersSearchForm>
            <UsersPageNav requestUsersHandler={requestUsersHandler}
                {...props}/>
        </div>
    )
})

export default UsersSearchPanel