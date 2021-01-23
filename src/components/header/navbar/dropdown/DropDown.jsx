import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import styled from 'styled-components';

const SettingsBtn = styled.button`
    background-color: transparent;
    color: #ffffff;
    border: none;
    text-decoration: none;
    display: inline;
    margin: 0;
    padding: 0;
    &:hover, &:focus {
        outline: none;
    }
    i {
        padding: 3px;
        font-size: 18px;
        &.fa-globe {
            font-size: 17px;
        }
    }
`;

const DropDownMenu = styled(DropdownMenu)`
    padding: 0;
    min-width: 220px;
    text-align: center;
    border-radius: 0;
    border: none;
    &:focus {
        outline: none;
    }
`; 

const DropDownList = styled.ul`
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-inline-start: 0;
    a {
        color: #404040!important;
        display: block;
        overflow: hidden;
        padding: 8px 20px;
        &:hover, &:focus {
            background-color: rgba(237,241,245,0.8);
            color: #404040;
        }
    }
`;

const DropDown = ({login, logOut}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} title="Settings">
            <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
                <SettingsBtn>
                    <span className="hidden-xs hidden-sm">Settings</span> 
                    <i className="fa fa-cogs"></i>
                </SettingsBtn>
            </DropdownToggle>
            <DropDownMenu>
                <DropDownList>
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
                </DropDownList>
            </DropDownMenu>
        </Dropdown>   
    );
}
export default DropDown;