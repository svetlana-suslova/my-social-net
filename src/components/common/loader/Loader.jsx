import React from 'react';
import s from './Loader.module.sass';
import loader from '../../../assets/img/loader.svg'

const Loader = () => {
    return (
        <div className={s.loader}> 
          <img src={loader} alt="loader"/>
        </div>
    );   
}
export default Loader;