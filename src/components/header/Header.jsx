import React from 'react';
import s from './Header.module.sass';
import Navbar from './navbar/Navbar';

const Header = ({isAuth, login, logOut}) => {
    return (
        <header className={s.header}>
            <Navbar isAuth={isAuth} 
            login={login}
            logOut={logOut} />
        </header>
    );
}
export default Header;