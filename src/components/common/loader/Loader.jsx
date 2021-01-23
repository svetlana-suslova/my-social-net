import React from 'react';
import styled from 'styled-components';
import loader from '../../../assets/img/loader.svg';

const StyledLoader = styled.div`
  text-align: center;
  img {
    width: 80px;
    height: 80px;
  }
`;

const Loader = () => {
    return (
        <StyledLoader> 
          <img src={loader} alt="loader"/>
        </StyledLoader>
    );   
}
export default Loader;