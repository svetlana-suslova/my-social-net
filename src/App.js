import React, {Component} from 'react';
import './App.sass';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import MessagesContainer from './components/messages/MessagesContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import {Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/login/Login';
import {initializeApp} from './redux/app-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import Loader from './components/common/loader/Loader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Loader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile/:userId?" render={ () => 
            <ProfileContainer/> }/>
          <Route path="/messages" render={ () => 
            <MessagesContainer /> }/>
          <Route path="/users" render={ () => 
            <UsersContainer /> }/>
          <Route path="/login" render={ () => 
            <Login/> }/>
          <Route path="/news" render={ () => <News /> }/>
          <Route path="/music" render={ () => <Music /> }/>
          <Route path="/settings" render={ () => <Settings /> }/>
        </div>
      </div>
    )  
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
