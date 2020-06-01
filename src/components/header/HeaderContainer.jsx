import React, {Component} from 'react';
import Header from './Header';
import {setAuthUserData, toggleIsFetching} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import { authAPI } from '../../api/api';

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        authAPI.getAuth().then(data => {
            this.props.toggleIsFetching(false); 
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }    
        });
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
    setAuthUserData,
    toggleIsFetching
} )(HeaderContainer);