import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, text: 'Hi there!', like: 5},
  {id: 2, text: 'How are you?', like: 12}
];
let dialogs = [
  {id: 1, name: 'Argon'},
  {id: 2, name: 'Butan'},
  {id: 3, name: 'Neon'},
  {id: 4, name: 'Crypton'},
  {id: 5, name: 'Helium'},
  {id: 6, name: 'Oxygen'}
];
let messages = [
  {id: 1, text: 'Hello people.'},
  {id: 2, text: 'Learning Rect??'},
  {id: 3, text: 'Viel Spass!'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}
    dialogs={dialogs}
    messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
