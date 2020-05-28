import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({store, profile}) => {
  return (
    <div>
      <ProfileInfo profile={profile}/>
      <MyPostsContainer store={store}/>
    </div>  
  );
}
export default Profile;