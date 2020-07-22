import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
  return (
    <div>
      <ProfileInfo profile={profile} 
      status={status} 
      updateUserStatus={updateUserStatus} 
      isOwner={isOwner}
      savePhoto={savePhoto}
      saveProfile={saveProfile} />
      <MyPostsContainer/>
    </div>  
  );
}
export default Profile;