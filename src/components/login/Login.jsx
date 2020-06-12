import React from 'react';
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" placeholder="Login" component="input"/>
            </div>
            <div>
                <Field name="password" placeholder="Password" component="input"/>
            </div>
            <div>
                <Field name="rememberMe" component="input"/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )       
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const onSubmitLogin = (formData) => {
        console.log(formData);
    }
    
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmitLogin}/>
    </div>   
}
export default Login;