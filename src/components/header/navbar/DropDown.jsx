import React, { useState } from 'react';
import s from './DropDown.module.sass';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';


const DropDown = ({isAuth, login, logOut}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} title="Settings">
            <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
                <button className={s.linkButton}>
                    <span class="hidden-xs hidden-sm">Settings</span> 
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                </button>
            </DropdownToggle>
            <DropdownMenu className={s.dropdownMenu}>
                <ul>
                    <li>
                        <a href="#" title="English">
                            <div class="col-xs-4">
                                <i class="fa fa-globe" aria-hidden="true"></i>
                            </div>
                            <div class="col-xs-8 text-left"> 
                                <span>Language</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Questions">
                            <div class="col-xs-4">
                                <i class="fa fa-question" aria-hidden="true"></i>
                            </div>
                            <div class="col-xs-8 text-left">
                                <span>FAQ</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" title={login} onClick={logOut}>
                            <div class="col-xs-4">
                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                            </div>
                            <div class="col-xs-8 text-left">
                                <span>Logout</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </DropdownMenu>
        </Dropdown>   
    );
}
export default DropDown;