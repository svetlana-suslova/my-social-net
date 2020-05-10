import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Messages.module.sass';

const DialogsItem = ({name, id}) => {
  return (
    <div className={`${s.dialogsItem} ${s.active}`}>
      <NavLink to={`/messages/${id}`}>{name}</NavLink>
    </div>
  );
}
export default DialogsItem;