import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({store, profile, status, updateUserStatus}) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} 
      updateUserStatus={updateUserStatus}/>
      <MyPostsContainer store={store}/>
    </div>  
  );
}
export default Profile;