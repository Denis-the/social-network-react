import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from 'react-final-form';
import { loginToServer } from "../../redux/authReducer";
import { Redirect } from "react-router";

const LoginForm = () => {
    const dispatch = useDispatch();
    return (
        <Form
            onSubmit={(fields) => {
                dispatch(loginToServer(fields))
            }}
            initialValues={{ email: 'd.rozumnyu@gmail.com', password: 'umfLSzUny3G!FYY' }}
        >
            {({ form, handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="email"
                        />
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            placeholder="password"
                        />
                        <Field
                            name="submit"
                            component="button"
                            type="submit"
                        >Enter</Field>
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