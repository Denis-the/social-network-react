import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { loginToServer } from "../../redux/authReducer";
import Captcha from "../common/Captcha/Captcha";
import { InputFE, CheckBoxFE } from "../common/FormElems/PrimeReactFormElems";
import { requiredField, maxLengthFieldCreator, 
    minLengthFieldCreator, composeValidators } from '../../utils/validators/validators';
import { getIsAuth } from "../../redux/selectors/authSelectors";
import { Redirect } from "react-router";
import { Button } from "primereact/button";

const maxLengthField_15 = maxLengthFieldCreator(15);
const minLengthField_6 = minLengthFieldCreator(6);

const useLogin = () => {
    const dispatch = useDispatch();
    const login = fields => dispatch(loginToServer(fields));
    return login;
    
}

const LoginForm = (props) => {
    const isCaptchaRequired = useSelector( state => state.auth.isCaptchaRequired);
    const captchaUrl = useSelector( state => state.auth.captchaUrl);
    const login = useLogin();

    return (
        <Form
            onSubmit={ fields => login(fields).then( err => ({[FORM_ERROR]: err}))}
            initialValues={{ email: 'd.rozumnyu@gmail.com', password: '', rememberMe:true, captcha:'',}}>  
                {({ form, handleSubmit, submitError }) => (
                    <form className="p-fluid" onSubmit={handleSubmit}>
                        <div className="p-d-flex p-jc-center">
                            <div className='card'>
                                <h4 className='p-text-center'>LOGIN</h4>
                                
                                <div>
                                    <Field id='Email' name='email' type='email' validate={requiredField} component={InputFE} />
                                </div>
                                <div>   
                                    <Field id='Password' name='password' type='password' component={InputFE}
                                        validate={composeValidators(requiredField, maxLengthField_15, minLengthField_6)} />
                                </div>
                                <div>  
                                    <Field id='Remember me' name="rememberMe" type="checkbox" component={CheckBoxFE} />
                                </div>
                                {isCaptchaRequired && <Captcha url={captchaUrl} />}
                                {submitError && <p className='p-error'>{submitError}</p>}

                                <Button type="submit" label="Submit" className="p-mt-2" />
                            </div>
                        </div>
                    </form>
                )}
        </Form>)
}

const Login = (props) => {
    const isAuth = useSelector(getIsAuth);
    if (isAuth) return <Redirect to='/profile' />
    return <LoginForm />
}

export default Login;