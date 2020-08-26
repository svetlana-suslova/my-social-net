import React from 'react';
import s from './Buttons.module.sass';

export const MainMediumButton = ({text}) => {
    return (
        <button className={s.mainMediumButton}>{text}</button>
    );   
}

export const MainSmallButton = ({text, ...props}) => {
    return (
        <button {...props} className={s.mainSmallButton}>{text}</button>
    );   
}

export const InvertSmallButton = ({text, ...props}) => {
    return (
        <button {...props} className={s.invertSmallButton}>{text}</button>
    );   
}