import React from 'react';
import styled from 'styled-components';
import loader from '../../../assets/img/loader.svg'

const Loader = () => {

  const Loader = styled.div`
    text-align: center;
    img {
      width: 80px;
      height: 80px;
    }
  `;
    return (
        <Loader> 
          <img src={loader} alt="loader"/>
        </Loader>
    );   
}
export default Loader;