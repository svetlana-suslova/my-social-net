import React, {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {logOut} from '../../redux/auth-reducer';

class HeaderContainer extends Component {
    render() {
        return <Header { ... this.props} />
    }   
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
});

export default compose(
    connect(mapStateToProps, { logOut })
)(HeaderContainer);