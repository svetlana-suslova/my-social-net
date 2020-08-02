import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.sass';
import Loader from '../common/loader/Loader';
import Navbar from '../navbar/Navbar';

const Header = ({isAuth, isFetching, login, logOut}) => {
    return (
        <header className={s.header}>
            <Navbar />
            {/* <div className={s.loginBlock}>
            { isFetching ? <Loader />: null }    
            { isAuth
             ? <div>{login}<span/><button onClick={logOut}>Log out</button></div>
             : <NavLink to={'/login'}>Login</NavLink> } 
            </div> */}
        </header>
    );
}
export default Header;