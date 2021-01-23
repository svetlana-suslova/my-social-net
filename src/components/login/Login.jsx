import React from 'react';
import { Redirect } from 'react-router-dom';
import Loader from '../common/loader/Loader';
import logo from '../../assets/img/logo.png';
import LoginReduxForm from './LoginForm';
import styled from 'styled-components';
import urban from '../../assets/img/urban.jpg';

const LoginPage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${urban});
    background-size: cover;
    background-position: center;
    position: absolute;
`;

const FormBox = styled.div`
    width: 380px;
    overflow: hidden;
    min-height: 410px;
    padding: 15px 15px 0;
    color: #ffffff;
    position: relative;
    top: 50%;
    margin: auto;
    margin-top: -175px;
    background: rgba(0, 0, 0, 0.75);
    form {
        padding: 0 15px;
    }
    input, button {
        margin-top: 20px;
    }    
`;

const Logo = styled.div`
    width: 100%;   
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    span {
        font-style: italic;
        font-size: 16px;
        font-weight: 700;
    }  
    img {
        width: 70%;
        margin: 15px 0 0;
        height: auto;
    }    
`;

const Login = ({logIn, isAuth, captchaUrl, isFetching}) => {
    
    const onSubmitLogin = ({email, password, rememberMe, captcha}) => {
        logIn(email, password, rememberMe, captcha);
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    
    return (
        <LoginPage>
            <FormBox>
                <Logo>
                    <span>My</span>
                    <img src={logo} alt="logo"/>
                    <span>Net</span>
                </Logo>
                <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmitLogin}/>
                {isFetching ? <Loader /> : null}
            </FormBox>
        </LoginPage> 
    )   
}

export default Login;