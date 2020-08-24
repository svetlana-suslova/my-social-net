import React, {Component} from 'react';
import s from './App.module.sass';
import HeaderContainer from './components/header/HeaderContainer';
import Wall from './components/wall/Wall';
import Music from './components/music/Music';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/login/Login';
import {initializeApp, catchGlobalError} from './redux/app-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import Loader from './components/common/loader/Loader';
import ErrorMessage from './components/common/errorMessage/ErrorMessage';
import {withSuspense} from './hoc/withSuspense';
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

    if (!this.props.isAuth) {
      return (
        <Switch>
          <Route exact path="/" render={ () => <Redirect to={"/login"}/> }/>
          <Route path="/login" render={ () => <Login/> }/>
          <Route path="/profile" render={ () => <Redirect to={"/login"}/> }/>
          <Route path="/users" render={ () => <Redirect to={"/login"}/> }/>
          <Route path="/wall" render={ () => <Redirect to={"/login"}/> }/>
          <Route path="/music" render={ () => <Redirect to={"/login"}/> }/>
        </Switch>
      ); 
    }
  
    return (
      <div className={s.appWrapper}>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" render={ () => <Redirect to={"/profile"}/> }/>
          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
          <Route path="/users" render={ () => <UsersContainer /> }/>
          <Route path="/wall" render={ () => <Wall /> }/>
          <Route path="/music" render={ () => <Music /> }/>
          <Route path="/login" render={ () => <Redirect to={"/profile"}/> }/>
          <Route path="*" render={ () => <div>404 PAGE NOT FOUND</div> }/>
        </Switch>
      </div>
    )  
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { initializeApp, catchGlobalError }),
  withRouter
)(App);
