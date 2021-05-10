import { memo } from 'react'
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { useDispatch } from 'react-redux';
import { changeProfileInfo } from '../../../redux/profileReducer';
import { ButtonFE, InputFE, SingleSelectButtonsFE, TextAreaFE } from '../../common/FormElems/PrimeReactFormElems';
import { requiredField, maxLengthFieldCreator, 
    minLengthFieldCreator, composeValidators } from '../../../utils/validators/validators';

const maxLengthField_300 = maxLengthFieldCreator(300);
const maxLengthField_50 = maxLengthFieldCreator(50);
const minLengthField_3 = minLengthFieldCreator(3);

const useChangeProfileFn = () => {
    const dispatch = useDispatch();
    return fields => dispatch(changeProfileInfo(fields));
    
}

const ProfileInfoUpdateForm = memo( ({profileInfo}) => {    
    const changeProfileFn = useChangeProfileFn();
    return (
            <Form
            onSubmit={ fields => {            
                return changeProfileFn(fields).then( err => ({[FORM_ERROR]: err}))
            }
            }
            initialValues={{...profileInfo}}> 
            {({form, handleSubmit, submitError, }) => (
                <form onSubmit={handleSubmit} className=''>
                    {console.log(form.getState())}
                    <div>
                        <h4>Main info</h4>
                        <div>
                            <Field  id='Fullname' name='fullName' component={InputFE}
                                validate={composeValidators(requiredField, maxLengthField_50, minLengthField_3)}
                                className='p-inputtext-sm p-shadow-3'
                                styled={{width:'350px'}}/>
                        </div>
                        <div>
                            <Field  id='About me' name='aboutMe' component={TextAreaFE} 
                                validate={composeValidators(requiredField, maxLengthField_300)}
                                styled={{width:'350px', height:'200px'}}
                                className='p-inputtextarea-resizable p-shadow-3'/>
                        </div>
                    </div>
                    <div>
                        <h4>Job</h4>
                        <div className='p-d-inline-flex' style={{alignItems:'center'}}>
                            <span>Looking for a job:</span>
                            <Field id='Job' name='lookingForAJob' 
                                component={SingleSelectButtonsFE} className='p-shadow-3'
                                options={[{ name: 'NO', value: false, className: 'p-button-sm'}, { name: 'YES', value: true, className: 'p-button-sm' }]}
                                value={profileInfo.lookingForAJob} optionLabel="name"/>

                        </div>
                        {  form.getState().values.lookingForAJob ?
                            <div>
                                <Field id='Job description' name='lookingForAJobDescription' component={TextAreaFE} 
                                    validate={composeValidators(maxLengthField_300)}
                                    className='p-inputtextarea-resizable p-shadow-3'
                                    styled={{width:'350px', height:'200px'}}/>
                            </div> :  null 
                        }
                    </div>
                    <div>   
                        {submitError && <p className='p-error' dangerouslySetInnerHTML={{__html:submitError}}></p>}
                            <Field name='submit' component={ButtonFE} type='submit' className='p-shadow-3'>Save</Field>                           
                    </div>
                </form>
            )}
            </Form>
    )
})

export default ProfileInfoUpdateForm;