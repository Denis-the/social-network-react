import { Field, Form } from 'react-final-form'
import { InputFormElem } from '../../common/FormElems/FormElems'
import s from './UsersSearchPanel.module.css'

const UsersSearchForm = ({submitAction, currentPage, perPage, searchTerm, searchFollowed}) => {

    return (
        <Form
        onSubmit={ (fields) => submitAction(fields) }
        initialValues={{term:searchTerm, followed:searchFollowed, page:currentPage, perPage:perPage}}
        > 
        {({form, handleSubmit, submitError}) => (
                <form onSubmit={handleSubmit}>
                <label>search term:</label>
                <Field name='term' component={InputFormElem}/><br/>
                <label>only followed:</label>
                <Field name='followed' component={InputFormElem}/><br/>
                <label>page:</label>
                <Field name='page' component={InputFormElem}/><br/>
                <label>per page:</label>
                <Field name='perPage' component={InputFormElem}/><br/>
                <Field name='submit' component='button' type='submit'>Search</Field><br/>
            </form>
        )}
        </Form>
    )
}



const UsersSearchPanel = (props) => {

    return (
        <div>
            <UsersSearchForm
            {...props}
            ></UsersSearchForm>
        </div>
    )
}

export default UsersSearchPanel