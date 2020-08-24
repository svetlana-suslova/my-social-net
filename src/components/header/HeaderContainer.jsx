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
    login: state.auth.login
});

export default compose(
    connect(mapStateToProps, { logOut })
)(HeaderContainer);