import React from 'react';
import DialogsItem from './dialogsItem/DialogsItem';
import MessagesItem from './messagesItem/MessagesItem';
import s from './Messages.module.sass';
import {addMessageCreator, updateNewMessageTextCreator} from '../../redux/state';

const Messages = ({messagesPage, dispatch}) => {

  let dialogsElements = messagesPage.dialogs
    .map(d => <DialogsItem name={d.name} id={d.id} />);
  
  let messagesElements = messagesPage.messages
    .map(m => <MessagesItem text={m.text} id={m.id}/>);

  let addNewMesssage = () => {
    dispatch(addMessageCreator());  
  }
  
  let onMessageChange = (e) => {
    let text = e.target.value;
    let action = updateNewMessageTextCreator(text);
    dispatch(action);
  }

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
            value={messagesPage.newMessageText}
            onChange={onMessageChange}/>
          </div>
          <div>
            <button onClick={addNewMesssage}>Add message</button>
          </div>
        </div>
      </div>
    </div>  
  );
}
export default Messages;