import React from 'react';
import styled from 'styled-components';

const ErrorMessage = () => {
    const ErrorMessage = styled.div`
        text-align: center;
        padding-top: 100px;
        font-size: 32px;
        color: #e32636;
    `;
    return (
        <ErrorMessage>Something went wrong!</ErrorMessage>
    );   
}
export default ErrorMessage;