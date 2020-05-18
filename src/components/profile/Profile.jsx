import React from 'react';
// import s from './Profile.module.sass';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({store}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store}/>
    </div>  
  );
}
export default Profile;