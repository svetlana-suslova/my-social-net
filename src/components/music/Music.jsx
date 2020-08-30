import React from 'react';
import styled from 'styled-components';


const Music = () => {
  const Icon = styled.div`
    i {
      padding: 5px;
    }
    a, a:focus, a:hover {
      color: #e6381b;
      text-decoration: none;
      cursor: pointer;
    }
  `;

    return (
      <Icon>
        <a target="blank" href="https://soundcloud.com/arma17/spekulant-arma17">
          <i className="fa fa-soundcloud"></i>
          <span>Arma Spekulant</span>
        </a>
      </Icon>  
    );
}
export default Music;