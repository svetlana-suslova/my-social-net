import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
    text-align: center;
    padding-top: 100px;
    font-size: 32px;
    color: #e32636;
`;

const ErrorMessage = () => {

    return (
        <Error>Something went wrong!</Error>
    );   
}
export default ErrorMessage;