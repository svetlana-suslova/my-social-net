import React, { useState } from 'react';
import s from './DropDown.module.sass';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';


const DropDown = ({login, logOut}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} title="Settings">
            <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
                <button className={s.linkButton}>
                    <span className="hidden-xs hidden-sm">Settings</span> 
                    <i className="fa fa-cogs"></i>
                </button>
            </DropdownToggle>
            <DropdownMenu className={s.dropdownMenu}>
                <ul>
                    <li>
                        <a href="#" title="English">
                            <div className="col-xs-4">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                            </div>
                            <div className="col-xs-8 text-left"> 
                                <span>Language</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Questions">
                            <div className="col-xs-4">
                                <i className="fa fa-question" aria-hidden="true"></i>
                            </div>
                            <div className="col-xs-8 text-left">
                                <span>FAQ</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" title={login} onClick={logOut}>
                            <div className="col-xs-4">
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                            </div>
                            <div className="col-xs-8 text-left">
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