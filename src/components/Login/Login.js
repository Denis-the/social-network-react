import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from 'react-final-form';
import { loginToServer } from "../../redux/authReducer";
import { Redirect } from "react-router";
import { requiredField, maxLengthFieldCreator, minLengthFieldCreator, composeValidators } from '../../utils/validators/validators';
import { InputField } from "../common/FormElems/FormElems";

const maxLengthField_15 = maxLengthFieldCreator(15);
const mixLengthField_6 = minLengthFieldCreator(6);



const LoginForm = () => {
    const dispatch = useDispatch();
    return (
        <Form
            onSubmit={(fields) => {
                console.log('submiting')
                dispatch(loginToServer(fields))
            }}
            initialValues={{ email: 'd.rozumnyu@gmail.com', password: 'umfLSzUny3G!FYY', rememberMe:true }}
        >
            {({ form, handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <label>Email:</label><Field name='email' type='email' validate={requiredField} component={InputField}/>
                        <br/>
                        <label>Pass:</label><Field name='password'  type='password'
                        validate={composeValidators(requiredField, maxLengthField_15, mixLengthField_6)} 
                        component={InputField}/>
                        <br/>
                        <label>remember me</label><Field name="rememberMe" component="input" type="checkbox"/>
                        <br/>
                        <Field name="submit" component="button" type="submit">Enter</Field>
                    </form>
                )
            }}
        </Form>)
}

const Login = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <>
            {isAuth
                ? <Redirect to='/profile' />
                : <LoginForm />
            }
        </>
    )
}

export default Login;