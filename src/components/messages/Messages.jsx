import React from 'react';
import DialogsItem from './dialogsItem/DialogsItem';
import MessagesItem from './messagesItem/MessagesItem';
import s from './Messages.module.sass';
import { Redirect } from 'react-router-dom';

const Messages = ({dialogs, messages, addMessage, updateMessage, newMessageText, isAuth}) => {

  let dialogsElements = 
    dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = 
    messages.map(m => <MessagesItem text={m.text} id={m.id} key={m.id}/>);

  let onNewMesssageAdd = () => {
    addMessage(); 
  }
  let onMessageChange = (e) => {
    let text = e.target.value;
    updateMessage(text);
  }

  if (!isAuth) return <Redirect to={'/login'} />

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea placeholder="Enter your message"
            value={newMessageText}
            onChange={onMessageChange}/>
          </div>
          <div>
            <button onClick={onNewMesssageAdd}>Add message</button>
          </div>
        </div>
      </div>
    </div>  
  );
}
export default Messages;