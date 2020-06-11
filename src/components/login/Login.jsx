import React from 'react';
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name="login" placeholder="Login" component="input"/>
            </div>
            <div>
                <Field type="text" name="password" placeholder="Password" component="input"/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input"/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )       
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>   
}
export default Login;