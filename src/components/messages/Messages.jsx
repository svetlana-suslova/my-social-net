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

  let dialogsData = [
    {id: 1, name: 'Argon'},
    {id: 2, name: 'Butan'},
    {id: 3, name: 'Neon'},
    {id: 4, name: 'Crypton'},
    {id: 5, name: 'Helium'},
    {id: 6, name: 'Oxygen'}
  ];
  let messagesData = [
    {id: 1, text: 'Hello people.'},
    {id: 2, text: 'Learning Rect??'},
    {id: 3, text: 'Viel Spass!'}
  ];

    return (
      <div className={s.content}>
        <div className={s.dialogs}>
          <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
          <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
          <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
          <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
          <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
          <DialogsItem name={dialogsData[5].name} id={dialogsData[5].id}/>
        </div>
        <div className={s.messages}>
          <MessagesItem text={messagesData[0].text} id={messagesData[0].id}/>
          <MessagesItem text={messagesData[1].text} id={messagesData[1].id}/>
          <MessagesItem text={messagesData[2].text} id={messagesData[2].id}/>
        </div>
      </div>  
    );
}
export default Messages;