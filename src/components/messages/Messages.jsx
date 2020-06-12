import React from 'react';
import DialogsItem from './dialogsItem/DialogsItem';
import MessagesItem from './messagesItem/MessagesItem';
import s from './Messages.module.sass';
import { reduxForm, Field } from 'redux-form'

const AddMessagesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newMessageText" 
            placeholder="Enter your message" 
            component="textarea"/>
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
  )       
}

const AddMessagesReduxForm = reduxForm({form: 'addMessage'})(AddMessagesForm);

const Messages = ({dialogs, messages, addMessage}) => {

  let dialogsElements = 
    dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = 
    messages.map(m => <MessagesItem text={m.text} id={m.id} key={m.id}/>);

  const onMesssageAdd = (formData) => {
    addMessage(formData.newMessageText);
  }

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessagesReduxForm onSubmit={onMesssageAdd}/>
      </div>
    </div>  
  );
}
export default Messages;