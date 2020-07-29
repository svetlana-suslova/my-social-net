import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Messages.module.sass';

const MessagesItem = ({text}) => {
  return (
    <div className={s.messagesItem}>
      <NavLink to=''>{text}</NavLink>
    </div>
  );
}
export default MessagesItem;