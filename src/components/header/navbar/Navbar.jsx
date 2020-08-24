import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.sass';
import DropDown from './dropdown/DropDown';


const Navbar = ({login, logOut}) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' title="Profile">
                    <span className="hidden-xs hidden-sm">Profile</span> 
                    <i className="fa fa-user"></i>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' title="Users">
                    <span className="hidden-xs hidden-sm">Users</span> 
                    <i className="fa fa-users"></i>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/wall' title="Wall">
                    <span className="hidden-xs hidden-sm">Wall</span> 
                    <i className="fa fa-database"></i>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' title="Music">
                    <span className="hidden-xs hidden-sm">Music</span> 
                    <i className="fa fa-music"></i>
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