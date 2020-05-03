import React from 'react';
import s from './Header.module.sass';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK__0dZPtkT7Opgx6qdPJa55dDyMpNj12UwAtzX6LjFrLatc-b&usqp=CAU" alt="logo"/>
        </header>
    );
}
export default Header;