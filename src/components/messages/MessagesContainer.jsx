import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from '../../redux/messages-reducer';
import Messages from './Messages';

const MessagesContainer = ({store}) => {
  let state = store.getState();

  let addMessage = () => {
    store.dispatch(addMessageCreator());  
  }
  let updateMessage = (text) => {
    let action = updateNewMessageTextCreator(text);
    store.dispatch(action);
  }

  return (
    <Messages addMessage={addMessage}
    updateMessage={updateMessage}
    messages={state.messagesPage.messages}
    dialogs={state.messagesPage.dialogs}
    newMessageText={state.messagesPage.newMessageText}/>
  );
}
export default MessagesContainer;