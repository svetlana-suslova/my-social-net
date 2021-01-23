import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar/Navbar';

const HeaderStyled = styled.header`
    display: flex;
    min-height: 50px;
    background: #4F5467;
    padding: 15px 10px 10px 370px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
`;

const Header = ({login, logOut}) => {
    
    return (
        <HeaderStyled>
            <Navbar login={login}
            logOut={logOut} />
        </HeaderStyled>
    );
}
export default Header;