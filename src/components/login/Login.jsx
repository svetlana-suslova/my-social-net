import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/formControls/FormControls';
import { required } from '../../utils/validators';
import {connect} from 'react-redux';
import {logIn} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from '../common/formControls/FormControls.module.sass';
import styles from './Login.module.sass';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" 
                placeholder="Email" 
                component={Input}
                validate={[required]}/>
            </div>
            <div>
                <Field name="password" 
                placeholder="Password"
                type="password" 
                component={Input}
                validate={[required]}/>
            </div>
            <div>
                <Field name="rememberMe" 
                component={Input}
                type="checkbox"/>Remember me
            </div>
            { captchaUrl && <img className={styles.captcha} src={captchaUrl} alt="captcha"/> }
            { captchaUrl && <Field name="captcha" 
                placeholder="Captcha" 
                component={Input}
                validate={[required]}/> }
            { error && <div className={s.formError}>
                {error}
            </div> 
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )       
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({logIn, isAuth, captchaUrl}) => {
    const onSubmitLogin = ({email, password, rememberMe, captcha}) => { //formData
        logIn(email, password, rememberMe, captcha);
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmitLogin}/>
    </div>   
}
const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
      captchaUrl: state.auth.captchaUrl 
    }
  }
export default connect(mapStateToProps, {logIn})(Login);