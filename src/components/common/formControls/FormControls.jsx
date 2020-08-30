import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: ${props => props.error ? "2px solid red" : "1px solid #ccc"};
    border-radius: 4px;
    &:focus {
        outline: 2px solid #edf1f5;
    }     
`;
const TextArea = styled(Input)`
    height: 70px;
`;
const Error = styled.span`;
    color: red;
    padding: 5px;
`;

export const FormTextArea = ({input, meta: {error, touched}, ...props}) => {
    const hasError = error && touched;
    return (
        <div>
            <div>
                <TextArea as="textarea" {...input} error={hasError} {...props}/>
            </div>
            { hasError && <Error>{error}</Error> }     
        </div>
    )
}

export const FormInput = ({input, meta: {error, touched}, ...props}) => {
    const hasError = error && touched;
    return (
        <div>
            <div>
                <Input {...input} error={hasError} {...props}/>
            </div>
            { hasError && <Error>{error}</Error> }     
        </div>
    )
}

export const FormError = ({error}) => {
    return  <Error>{error}</Error>
}