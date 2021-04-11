import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { Redirect } from "react-router";
import { loginToServer } from "../../redux/authReducer";
import Captcha from "../common/Captcha/Captcha";
import { InputFormElem } from "../common/FormElems/FormElems";
import { requiredField, maxLengthFieldCreator, 
    minLengthFieldCreator, composeValidators } from '../../utils/validators/validators';

const maxLengthField_15 = maxLengthFieldCreator(15);
const minLengthField_6 = minLengthFieldCreator(6);


const LoginForm = ({submitAction, isCaptchaRequired, captchaUrl}) => {
    return (
        <Form
            onSubmit={ fields => submitAction(fields).then( err => ({[FORM_ERROR]: err}))}
            initialValues={{ email: 'd.rozumnyu@gmail.com', password: 'umfLSzUny3G!FYY', rememberMe:true, captcha:'',}}
        >   
            {({ form, handleSubmit, submitError }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        { submitError &&  <p>{submitError}</p>}

                        <label>Email:</label>
                        <Field name='email' type='email' validate={requiredField} component={InputFormElem}/>
                        <br/>
                        <label>Pass:</label>
                        <Field name='password'  type='password'
                        validate={composeValidators(requiredField, maxLengthField_15, minLengthField_6)} 
                        component={InputFormElem}/>
                        <br/>
                        <label>remember me</label>
                        <Field name="rememberMe" component={InputFormElem} type="checkbox"/>
                        <br/>
                        <Field name="submit" component="button" type="submit">Enter</Field>
                        { isCaptchaRequired && <Captcha url={captchaUrl} />}
                    </form>
                )
            }}
        </Form>)
}

const Login = (props) => {
    const isAuth = useSelector( state => state.auth.isAuth);
    const isCaptchaRequired = useSelector( state => state.auth.isCaptchaRequired);
    const captchaUrl = useSelector( state => state.auth.captchaUrl);
    const dispatch = useDispatch();
    const login = fields => dispatch(loginToServer(fields))

    if (isAuth) return <Redirect to='/profile' />
    return (
        <LoginForm 
            isCaptchaRequired={isCaptchaRequired}
            captchaUrl={captchaUrl}
            submitAction={login}
        />
    )
}

export default Login;