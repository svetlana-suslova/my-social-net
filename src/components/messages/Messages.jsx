import React from 'react';
import DialogsItem from './dialogsItem/DialogsItem';
import MessagesItem from './messagesItem/MessagesItem';
import s from './Messages.module.sass';

const Messages = ({dialogs, messages}) => {

  let dialogsElements = dialogs
    .map(d => <DialogsItem name={d.name} id={d.id} />);
  
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