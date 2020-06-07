import React, {Component} from 'react';
import Header from './Header';
import {getAuthUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

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

export default connect(mapStateToProps, {
    getAuthUserData
} )(HeaderContainer);