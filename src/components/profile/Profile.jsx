import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({store, profile, status}) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status}/>
      <MyPostsContainer store={store}/>
    </div>  
  );
}
export default Profile;