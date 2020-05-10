import React from 'react';
import './App.sass';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () =>  {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile" render={ () => <Profile /> }/>
          <Route path="/messages" render={ () => <Messages /> }/>
          <Route path="/news" render={ () => <News /> }/>
          <Route path="/music" render={ () => <Music /> }/>
          <Route path="/settings" render={ () => <Settings /> }/>
        </div>
      </div>
    </Router> 
  );
}
export default App;
