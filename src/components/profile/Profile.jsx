import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({profile, status, updateUserStatus}) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} 
      updateUserStatus={updateUserStatus}/>
      <MyPostsContainer/>
    </div>  
  );
}
export default Profile;