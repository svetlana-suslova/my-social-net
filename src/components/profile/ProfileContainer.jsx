import React, {Component} from 'react';
import {setUserProfile} from '../../redux/profile-reducer';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) { userId = 2 }
    profileAPI.getProfile(userId).then(data => { 
        this.props.setUserProfile(data);
      });
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

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);