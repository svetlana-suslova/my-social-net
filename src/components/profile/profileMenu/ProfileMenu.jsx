import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './ProfileMenu.module.sass';

const ProfileMenu = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/posts'>Last posts</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/messages'>Chat</NavLink>
            </div>
      </nav>
    );
}
export default ProfileMenu;