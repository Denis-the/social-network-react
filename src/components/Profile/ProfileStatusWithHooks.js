import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/profileReducer';
import { getAuthId } from '../../redux/selectors/authSelectors';
import { maxLengthFieldCreator } from '../../utils/validators/validators';
import { ClearInputFE } from '../common/FormElems/PrimeReactFormElems';

const maxLengthField_300 = maxLengthFieldCreator(300);

const StatusForm = ({onClose, status}) => {
    const dispatch = useDispatch();
    const saveStatus = (status) => {
        dispatch(changeStatus(status));
        onClose();
    }
    return (
        <Form onSubmit={ fields => saveStatus(fields.status)}
        initialValues={{status:status}}>
            {({form, handleSubmit, submitError}) => {
            return (
                <form onBlur={handleSubmit} onSubmit={handleSubmit}>
                    <Field name='status' component={ClearInputFE} validate={maxLengthField_300}
                    styled={{width:'300px'}} autoFocus />
                </form>
            )}}
        </Form>
    )
}

const ProfileStatusWithHooks = React.memo(({profileId, status}) => {
    const [editMode, setEditMode] = useState(false);
    const authId = useSelector(getAuthId); 
    const toggleEditMode = () => {
        if (authId != profileId) return;
        setEditMode(!editMode);
    }

    return (
        <div>
            { !editMode ?
                <div className='profile-info__status' onDoubleClick={toggleEditMode}>{status}</div>
                : <StatusForm status={status} onClose={toggleEditMode}/>
            }
        </div>
    )
})
export default ProfileStatusWithHooks;
