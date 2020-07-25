import React from 'react';
import s from './ErrorMessage.module.sass';

const ErrorMessage = () => {
    return (
        <div className={s.errorMessage}>Something went wrong!</div>
    );   
}
export default ErrorMessage;