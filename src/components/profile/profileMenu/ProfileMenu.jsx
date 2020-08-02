import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './ProfileMenu.module.sass';

const ProfileMenu = () => {
    return (
        <nav className={s.nav}>
        <ul class="nav nav-tabs" role="tablist">
            <li><NavLink to='/posts' role="tab" id="postsTab" data-toggle="tab" aria-controls="posts" aria-expanded="true">Last posts</NavLink></li>
            <li class="active"><NavLink to='/profile/' id="profileTab" data-toggle="tab" aria-controls="profile" aria-expanded="true">Info</NavLink></li>
            <li><NavLink to='/messages' id="chatTab" data-toggle="tab" aria-controls="chat" aria-expanded="true">Chat</NavLink></li>
        </ul>

            {/* <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/posts'>Last posts</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/messages'>Chat</NavLink>
            </div> */}
      </nav>
    );
}
export default ProfileMenu;