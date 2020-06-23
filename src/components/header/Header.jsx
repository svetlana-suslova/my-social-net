import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.sass';
import Loader from '../common/loader/Loader';
import logo from '../../assets/img/rose.png';

const Header = ({isAuth, isFetching, login, logOut}) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
            { isFetching ? <Loader />: null }    
            { isAuth
             ? <div>{login}<span/><button onClick={logOut}>Log out</button></div>
             : <NavLink to={'/login'}>Login</NavLink> } 
            </div>
        </header>
    );
}
export default Header;