import React, {Component} from 'react';
import Header from './Header';
import {getAuthUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
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
    connect(mapStateToProps, { getAuthUserData })
)(HeaderContainer);