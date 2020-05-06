import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Messages.module.sass';


const Messages = () => {
    return (
      <div className={s.content}>
        <div className={s.dialogs}>
          <div className={`${s.dialogsItem} ${s.active}`}>
            <NavLink to='/messages/1'>Argon</NavLink>
          </div>
          <div className={s.dialogsItem}>
            <NavLink to='/messages/2'>Butan</NavLink>
          </div>
          <div className={s.dialogsItem}>
            <NavLink to='/messages/3'>Neon</NavLink>
          </div>
          <div className={s.dialogsItem}>
            <NavLink to='/messages/4'>Crypton</NavLink>
          </div>
          <div className={s.dialogsItem}>
            <NavLink to='/messages/5'>Helium</NavLink>
          </div>
          <div className={s.dialogsItem}>
            <NavLink to='/messages/6'>Oxygen</NavLink>
          </div> 
        </div>
        <div className={s.messages}>
          <div className={s.messagesItem}>
            <NavLink to=''>Hello people.</NavLink>
          </div>
          <div className={s.messagesItem}>
            <NavLink to=''>Learning Rect?</NavLink>
          </div>
          <div className={s.messagesItem}>
            <NavLink to=''>Viel Spass!</NavLink>
          </div>
        </div>
      </div>  
    );
}
export default Messages;