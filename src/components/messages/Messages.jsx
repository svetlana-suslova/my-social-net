import React from 'react';
import DialogsItem from './dialogsItem/DialogsItem';
import MessagesItem from './messagesItem/MessagesItem';
import s from './Messages.module.sass';
import { reduxForm, Field } from 'redux-form'
import { TextArea } from '../common/formControls/FormControls';
import { required, maxLength } from '../../utils/validators';

const maxLength50 = maxLength(50);

const AddMessagesForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <Field name="newMessageText" 
            placeholder="Enter your message" 
            component={TextArea}
            validate={[required, maxLength50]}/>
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