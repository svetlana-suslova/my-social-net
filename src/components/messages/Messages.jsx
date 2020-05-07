import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Messages.module.sass';

const DialogsItem = ({name, id}) => {
  return (
    <div className={`${s.dialogsItem} ${s.active}`}>
      <NavLink to={`/messages/${id}`}>{name}</NavLink>
    </div>
  );
}

const MessagesItem = ({text}) => {
  return (
    <div className={s.messagesItem}>
      <NavLink to=''>{text}</NavLink>
    </div>
  );
}

const Messages = () => {
    return (
      <div className={s.content}>
        <div className={s.dialogs}>
          <DialogsItem name="Argon" id="1"/>
          <DialogsItem name="Butan" id="2"/>
          <DialogsItem name="Neon" id="3"/>
          <DialogsItem name="Crypton" id="4"/>
          <DialogsItem name="Helium" id="5"/>
          <DialogsItem name="Oxygen" id="6"/>
        </div>
        <div className={s.messages}>
          <MessagesItem text="Hello people."/>
          <MessagesItem text="Learning Rect??"/>
          <MessagesItem text="Viel Spass!"/>
        </div>
      </div>  
    );
}
export default Messages;