import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import store from './redux/state';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={store.addPost.bind(store)} 
    updateNewPostText={store.updateNewPostText.bind(store)}/>,
    document.getElementById('root')
  );
}
renderEntireTree(store.getState());
store.subscribe(renderEntireTree);