import React, {Component} from 'react';
import {getUserProfile} from '../../redux/profile-reducer';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  } 
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);