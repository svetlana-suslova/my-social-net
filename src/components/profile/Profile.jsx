import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';
import PersonalProfile from './personalProfile/PersonalProfile';
import ProfileMenu from './profileMenu/ProfileMenu';
import MessagesContainer from './messages/MessagesContainer';
import {Route, withRouter, Switch} from 'react-router-dom';
import { compose } from 'redux';
import s from './Profile.module.sass';


const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
  return (
    <div>
      <div className={s.cover}></div>
      <PersonalProfile profile={profile}
      isOwner={isOwner}
      savePhoto={savePhoto}
      status={status} 
      updateUserStatus={updateUserStatus} />
      <ProfileMenu />
      <div>
        <Switch>
          {/* <Route path="/posts" render={ () => <MyPostsContainer /> }/> */}
          <Route path="/profile" render={ () => <ProfileInfo profile={profile} 
                                                isOwner={isOwner}
                                                savePhoto={savePhoto}
                                                saveProfile={saveProfile} /> }/>
          {/* <Route path="/messages" render={ () => <MessagesContainer /> }/> */}
        </Switch>
      </div>  
    </div>  
  );
}
export default Profile;
// export default compose(withRouter)(Profile);
