import React, {Component} from 'react';
import './App.sass';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/login/Login';
import {initializeApp} from './redux/app-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import Loader from './components/common/loader/Loader';
import {withSuspense} from './hoc/withSuspense';
const MessagesContainer = React.lazy(() => import('./components/messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

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
          <Switch>
            <Route exact path="/" render={ () => <Redirect to={"/profile"}/> }/>
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
            <Route path="/messages" render={withSuspense(MessagesContainer)}/>
            <Route path="/users" render={ () => 
              <UsersContainer /> }/>
            <Route path="/login" render={ () => 
              <Login/> }/>
            <Route path="/news" render={ () => <News /> }/>
            <Route path="/music" render={ () => <Music /> }/>
            <Route path="/settings" render={ () => <Settings /> }/>
            <Route path="*" render={ () => <div>404 PAGE NOT FOUND</div> }/>
          </Switch>
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
