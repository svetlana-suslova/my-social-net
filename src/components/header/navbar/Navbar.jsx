import React from 'react';
import {NavLink} from 'react-router-dom';
import DropDown from './dropdown/DropDown';
import styled from 'styled-components';


const Navbar = ({login, logOut}) => {

    const NavBar = styled.nav`
        display: flex;
    `;

    const NavItem = styled.div`
        font-size: 15px;
        padding: 0 30px;
        a, a:focus {
            color: #ffffff;
            text-decoration: none;
            cursor: pointer;
            i {
                padding: 3px;
                font-size: 18px;
            }
            .fa-globe {
                font-size: 17px;
            }
        }        
    `;

    return (
        <NavBar>
            <NavItem>
                <NavLink to='/profile' title="Profile">
                    <span className="hidden-xs hidden-sm">Profile</span> 
                    <i className="fa fa-user"></i>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/users' title="Users">
                    <span className="hidden-xs hidden-sm">Users</span> 
                    <i className="fa fa-users"></i>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/wall' title="Wall">
                    <span className="hidden-xs hidden-sm">Wall</span> 
                    <i className="fa fa-database"></i>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/music' title="Music">
                    <span className="hidden-xs hidden-sm">Music</span> 
                    <i className="fa fa-music"></i>
                </NavLink>
            </NavItem>
            <NavItem>
                <DropDown login={login}
                logOut={logOut} />
            </NavItem> 
      </NavBar>    
    );
}
export default Navbar;