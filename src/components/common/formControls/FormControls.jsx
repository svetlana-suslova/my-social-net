import React from 'react';
import s from './FormControls.module.sass';

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={hasError ? s.error : ""}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span> }     
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={hasError ? s.error : ""}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span> }     
        </div>
    )
}