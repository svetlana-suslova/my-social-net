import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import state, {addPost, updateNewPostText, subscribe} from './redux/state';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
    document.getElementById('root')
  );
}
renderEntireTree(state);
subscribe(renderEntireTree);