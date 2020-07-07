import React, {Component} from 'react';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
      // if (!userId) {
      //   this.props.history.push('/login');
      // }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    const {status, profile, updateUserStatus} = this.props;
    return (
      <Profile status={status}
      profile={profile}
      updateUserStatus={updateUserStatus} />
    );
  } 
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);