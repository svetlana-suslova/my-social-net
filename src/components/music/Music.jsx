import React from 'react';
import s from './Music.module.sass';


const Music = () => {
    return (
      <div className={s.icon}>
        <a target="blank" href="https://soundcloud.com/arma17/spekulant-arma17">
          <i className="fa fa-soundcloud"></i>
          <span>Arma Spekulant</span>
        </a>
      </div>  
    );
}
export default Music;