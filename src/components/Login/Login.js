

const Login = (props) => {
    return (
        <form>
            <input placeholder="Login"></input>
            <input type="password" placeholder="Password"></input>
            <button onClick={ props.submitLogin }>Sign in</button>
        </form>
    )
}

export default Login;