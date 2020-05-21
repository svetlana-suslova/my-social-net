import {addMessageCreator, updateNewMessageTextCreator} from '../../redux/messages-reducer';
import Messages from './Messages';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageCreator());
    },
    updateMessage: (text) => {
      let action = updateNewMessageTextCreator(text);
      dispatch(action);
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;