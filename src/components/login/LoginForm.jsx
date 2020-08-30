import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormError } from '../common/formControls/FormControls';
import { required } from '../../utils/validators';
import { LoginButton } from '../common/buttons/Buttons';
import styled from 'styled-components';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    const Captcha = styled.img`
        width: auto;
    `;

    return (
        <form onSubmit={handleSubmit}>
            { error && <FormError error={error} />
            }
            <div>
                <Field name="email" 
                placeholder="Email" 
                component={FormInput}
                validate={[required]}/>
            </div>
            <div>
                <Field name="password" 
                placeholder="Password"
                type="password" 
                component={FormInput}
                validate={[required]}/>
            </div>
            <div>
                <Field name="rememberMe" 
                component="input"
                type="checkbox"/>
                <div>Remember me</div>
            </div>
            { captchaUrl && <Captcha src={captchaUrl} alt="captcha"/> }
            { captchaUrl && <Field name="captcha" 
                placeholder="Captcha" 
                component={FormInput}
                validate={[required]}/> }
            <div>
                <LoginButton text="LOGIN" />
            </div>
        </form>
    )       
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;