import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from 'react-final-form';
import { Redirect } from "react-router";
import Captcha from "../common/Captcha/Captcha";
import { loginToServer } from "../../redux/authReducer";
import { InputFormElem } from "../common/FormElems/FormElems";
import { requiredField, maxLengthFieldCreator, minLengthFieldCreator, composeValidators } from '../../utils/validators/validators';

const maxLengthField_15 = maxLengthFieldCreator(15);
const minLengthField_6 = minLengthFieldCreator(6);




const LoginForm = ({errorMessage, captchaUrl, isCaptchaRequired}) => {
    const dispatch = useDispatch();
    return (
        <Form
            onSubmit={(fields) => {
                dispatch(loginToServer(fields))
            }}
            initialValues={{ email: 'd.rozumnyu@gmail.com', password: 'umfLSzUny3G!FYY', 
                rememberMe:true, captcha:'',}}
        >   
            {({ form, handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit}>

                        { errorMessage ? <p>{errorMessage}</p> : null}

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
                        { isCaptchaRequired ? <Captcha url={captchaUrl} /> : null}

                    </form>
                )
            }}
        </Form>)
}

const Login = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const isCaptchaRequired = useSelector(state => state.auth.isCaptchaRequired);
    const captchaUrl = useSelector(state => state.auth.captchaUrl);
    const errorMessage = useSelector(state => state.auth.errorMessage);


    if (isAuth) return <Redirect to='/profile' />
    return (
        <LoginForm 
            errorMessage={errorMessage}
            isCaptchaRequired={isCaptchaRequired}
            captchaUrl={captchaUrl}
        />
    )
}

export default Login;