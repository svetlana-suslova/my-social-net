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
import {initializeApp, catchGlobalError} from './redux/app-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import Loader from './components/common/loader/Loader';
import ErrorMessage from './components/common/errorMessage/ErrorMessage';
import {withSuspense} from './hoc/withSuspense';
import MyPostsContainer from './components/profile/myPosts/MyPostsContainer';
const MessagesContainer = React.lazy(() => import('./components/profile/messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

class App extends Component {
  
  componentDidCatch() {
    this.props.catchGlobalError();
  }

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Loader />
    }

    if (this.props.globalError) {
      return <ErrorMessage />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path="/" render={ () => <Redirect to={"/profile"}/> }/>
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
            <Route path="/messages" render={withSuspense(MessagesContainer)}/>
            <Route path="/users" render={ () => 
              <UsersContainer /> }/>
            <Route path="/login" render={ () => 
              <Login/> }/>
            <Route path="/wall" render={ () => <News /> }/>
            <Route path="/music" render={ () => <Music /> }/>
            <Route path="/settings" render={ () => <Settings /> }/>
            <Route path="/posts" render={ () => <MyPostsContainer /> }/>
            <Route path="*" render={ () => <div>404 PAGE NOT FOUND</div> }/>
          </Switch>
        </div>
      </div>
    )  
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError
});

export default compose(
  connect(mapStateToProps, { initializeApp, catchGlobalError }),
  withRouter
)(App);
