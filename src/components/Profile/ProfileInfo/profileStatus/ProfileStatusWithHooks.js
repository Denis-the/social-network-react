import { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../../../redux/profileReducer';
import { getStatus } from '../../../../redux/selectors/profileSelectors';
import { maxLengthFieldCreator } from '../../../../utils/validators/validators';
import { ButtonFormElem, InputFormElem } from '../../../common/FormElems/FormElems';

const maxLengthField_300 = maxLengthFieldCreator(300);

const StatusForm = ({onClose}) => {
    const status = useSelector(getStatus);
    const dispatch = useDispatch();
    const saveStatus = (status) => {
        dispatch(changeStatus(status));
        onClose();
    }
    return (
        <Form onSubmit={ fields => saveStatus(fields.status)}
        initialValues={{status:status}}
        >
            {({form, handleSubmit, submitError}) => {
            return (
                <form onSubmit={handleSubmit}>
                    <Field name='status' component={InputFormElem} validate={maxLengthField_300}/>
                    <Field name='save' component={ButtonFormElem} type='submit'>save</Field>
                    <Field name='cancel' component={ButtonFormElem} type='button' onClick={onClose}>cancel</Field>
                    { submitError && <p>{submitError}</p>}
                </form>
            )}}
        </Form>
    )
}

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const status = useSelector(getStatus);
    const toggleEditMode = () => setEditMode(!editMode);
    return (
        <div>
            { !editMode ?
                <div onDoubleClick={toggleEditMode}>status: {status || 'no status'}</div>
                : <StatusForm onClose={toggleEditMode}/>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;
