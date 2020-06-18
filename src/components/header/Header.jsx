import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.sass';
import Loader from '../common/loader/Loader';

const Header = ({isAuth, isFetching, login}) => {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK__0dZPtkT7Opgx6qdPJa55dDyMpNj12UwAtzX6LjFrLatc-b&usqp=CAU" alt="logo"/>
            <div className={s.loginBlock}>
            { isFetching ? <Loader />: null }    
            { isAuth ? <div>{login}</div> : <NavLink to={'/login'}>Login</NavLink> } 
            </div>
        </header>
    );
}
export default Header;