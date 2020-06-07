import React from 'react';
import './App.sass';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import MessagesContainer from './components/messages/MessagesContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/login/Login';

const App = ({store}) =>  {
  return (
    <Router>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile/:userId?" render={ () => 
            <ProfileContainer/> }/>
          <Route path="/messages" render={ () => 
            <MessagesContainer store={store}/> }/>
          <Route path="/users" render={ () => 
            <UsersContainer store={store}/> }/>
          <Route path="/login" render={ () => 
            <Login/> }/>
          <Route path="/news" render={ () => <News /> }/>
          <Route path="/music" render={ () => <Music /> }/>
          <Route path="/settings" render={ () => <Settings /> }/>
        </div>
      </div>
    </Router> 
  );
}
export default App;
