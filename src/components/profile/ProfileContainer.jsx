import React, {Component} from 'react';
import {getUserProfile, getUserProfileStatus} from '../../redux/profile-reducer';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
    this.props.getUserProfileStatus(userId);
  }
  render() {
    return (
      <Profile {...this.props} status={this.props.status} profile={this.props.profile} />
    );
  } 
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserProfileStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);