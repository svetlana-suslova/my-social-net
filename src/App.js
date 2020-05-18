import React from 'react';
import './App.sass';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import MessagesContainer from './components/messages/MessagesContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = ({store}) =>  {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile" render={ () => 
            <Profile store={store}/> }/>
          <Route path="/messages" render={ () => 
            <MessagesContainer store={store}/> }/>
          <Route path="/news" render={ () => <News /> }/>
          <Route path="/music" render={ () => <Music /> }/>
          <Route path="/settings" render={ () => <Settings /> }/>
        </div>
      </div>
    </Router> 
  );
}
export default App;
