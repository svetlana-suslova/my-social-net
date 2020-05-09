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

  let dialogs = [
    {id: 1, name: 'Argon'},
    {id: 2, name: 'Butan'},
    {id: 3, name: 'Neon'},
    {id: 4, name: 'Crypton'},
    {id: 5, name: 'Helium'},
    {id: 6, name: 'Oxygen'}
  ];
  let dialogsElements = dialogs
    .map(d => <DialogsItem name={d.name} id={d.id} />);
  
  let messages = [
    {id: 1, text: 'Hello people.'},
    {id: 2, text: 'Learning Rect??'},
    {id: 3, text: 'Viel Spass!'}
  ];
  let messagesElements = messages
    .map(m => <MessagesItem text={m.text} id={m.id}/>);

    return (
      <div className={s.content}>
        <div className={s.dialogs}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>  
    );
}
export default Messages;