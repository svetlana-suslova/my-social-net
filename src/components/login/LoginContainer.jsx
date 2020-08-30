import React, {Component} from 'react'
import {connect} from 'react-redux';
import {logIn} from '../../redux/auth-reducer';
import Login from './Login';
import { compose } from 'redux';

class LoginContainer extends Component {
    render() {
        return <Login { ... this.props} />
    }   
}

const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
      captchaUrl: state.auth.captchaUrl,
      isFetching: state.auth.isFetching 
    }
  }

export default compose(connect(mapStateToProps, { logIn }) 
)(LoginContainer);