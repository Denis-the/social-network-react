import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useRequestUsersHandler } from '../../hooks/users/usersHooks'


// import { InputFormElem, SelectFormElem } from '../common/FormElems/FormElems'
import { SelectFormElem } from '../common/FormElems/FormElems'
import { InputFormElem } from '../common/FormElems/PrimeReactFormElems'


import UsersPageNav from './UsersPagination';
import { SelectButton } from 'primereact/selectbutton'
import { InputText } from 'primereact/inputtext'

const UsersSearchForm = ({submitAction, currentPage, perPage, searchTerm, searchFollowed, isFetching}) => {

    const [searchFollowedValue, setSearchFollowedValue] = useState(searchFollowed);
    useEffect(()=> {
        setSearchFollowedValue(searchFollowed);
    }, [searchFollowed])

    const searchFollowedOptions = [
        {name:'OFF', value:null, className:'p-button-sm'},
        {name:'ON', value:true, className:'p-button-sm'},
    ];
    console.log(searchFollowedValue)

    return (
        <Form
        onSubmit={ (fields) => {
            submitAction({...fields, followed:searchFollowedValue});
        } }
        initialValues={{term:searchTerm, followed:searchFollowed, perPage:perPage}}
        > 
        {({form, handleSubmit, submitError}) => (
                <form onSubmit={handleSubmit}>
                <label>search term:</label>
                <Field name='term' component={InputFormElem} placeholder='term' className='p-inputtext-sm'/>
                
                <label className='p-text'>only followed:</label>
                <Field name='followed' component={SelectFormElem} value={true}>
                        <option value={true}>Yes</option>
                        <option value={''}>No</option>
                </Field>
                <Field name='submit' component='button' type='submit' className='p-component p-button p-button-sm'>Search</Field><br/>

                <InputText className='p-inputtext-sm'></InputText>

                <SelectButton className='p-d-inline-flex p-button-sm' disabled={isFetching}
                onChange={(e) => setSearchFollowedValue(e.value)}
                options={searchFollowedOptions} value={searchFollowedValue} optionLabel="name" ></SelectButton>
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