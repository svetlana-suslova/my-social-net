import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.sass';
import DropDown from './DropDown';


const Navbar = ({login, logOut}) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' title="Profile">
                    <span class="hidden-xs hidden-sm">Profile</span> 
                    <i class="fa fa-user" aria-hidden="true"></i>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' title="Users">
                    <span class="hidden-xs hidden-sm">Users</span> 
                    <i class="fa fa-users" aria-hidden="true"></i>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/wall' title="Wall">
                    <span class="hidden-xs hidden-sm">Wall</span> 
                    <i class="fa fa-database" aria-hidden="true"></i>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' title="Music">
                    <span class="hidden-xs hidden-sm">Music</span> 
                    <i class="fa fa-music" aria-hidden="true"></i>
                </NavLink>
            </div>
            <div className={s.item}>
                <DropDown login={login}
                logOut={logOut} />
            </div> 
      </nav>    
    );
}
export default Navbar;