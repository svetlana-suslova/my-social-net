import React from 'react';
import s from './FormControls.module.sass';

export const TextArea = ({input, meta: {error, touched}, ...props}) => {
    const hasError = error && touched;
    return (
        <div className={hasError ? s.error : ""}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <span>{error}</span> }     
        </div>
    )
}

export const Input = ({input, meta: {error, touched}, ...props}) => {
    const hasError = error && touched;
    return (
        <div className={hasError ? s.error : ""}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>{error}</span> }     
        </div>
    )
}