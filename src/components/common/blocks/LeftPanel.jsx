import React from 'react';
import styled from 'styled-components';

const LeftPanel = ({ ...props}) => {

  const Left = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
    position: absolute;
    width: 240px;
    height: 100%;
    top: 0px;
    padding: 50px 10px 0px 10px;
    margin-left: -240px;
    background: #ffffff;
    z-index: 99;
  `;

  return (
    <Left { ...props}></Left>
  );
}

export default LeftPanel;