import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: block;
    width: ${props => props.small ? "80px" : "110px"};
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #fff;
    background-color: #4F5467;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: 5px 0 20px 0;
    &:hover {
        border: 1px solid #4F5467;
        color: #4F5467;
        background: #edf1f5;
    }  
    &:focus {
        outline: none;
    }   
`;
const InvertedButton = styled(Button)`
    color: #4F5467;
    background-color: #edf1f5;
    border: 1px solid #4F5467;
    &:hover {
        border: 1px solid transparent;
        color: #fff;
        background-color: #4F5467;
    }
`;

export const MediumButton = ({text}) => {
    return (
        <Button>{text}</Button>
    );   
}

export const SmallButton = ({text, ...props}) => {
    return (
        <Button {...props} small>{text}</Button>
    );   
}

export const InvertedSmallButton = ({text, ...props}) => {
    return (
        <InvertedButton {...props} small>{text}</InvertedButton>
    );   
}