import React, {Component} from 'react';
import HeaderContainer from './components/header/HeaderContainer';
import Wall from './components/wall/Wall';
import Music from './components/music/Music';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import LoginContainer from './components/login/LoginContainer';
import {initializeApp, catchGlobalError} from './redux/app-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import Loader from './components/common/loader/Loader';
import ErrorMessage from './components/common/errorMessage/ErrorMessage';
import styled from 'styled-components';
import {withSuspense} from './hoc/withSuspense';
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

const AppWrapper = styled.div`
  width: 1000px;
  padding-top: 50px;
  margin-top: 0px;
  margin-left: 240px;
`;
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
          <Route path="/login" render={ () => <LoginContainer/> }/>
          <Route path="/profile" render={ () => <Redirect to={"/login"}/> }/>
          <Route path="/users" render={ () => <Redirect to={"/login"}/> }/>
          <Route path="/wall" render={ () => <Redirect to={"/login"}/> }/>
          <Route path="/music" render={ () => <Redirect to={"/login"}/> }/>
        </Switch>
      ); 
    }
  
    return (
      <AppWrapper>
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
      </AppWrapper>
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
