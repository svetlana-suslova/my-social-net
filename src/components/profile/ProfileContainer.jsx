import React, {Component} from 'react';
import {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {
  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    const {status, profile, updateUserStatus, savePhoto, saveProfile} = this.props;
    return (
      <Profile status={status}
      profile={profile}
      updateUserStatus={updateUserStatus}
      isOwner={!this.props.match.params.userId} 
      savePhoto={savePhoto}
      saveProfile={saveProfile} />
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
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);