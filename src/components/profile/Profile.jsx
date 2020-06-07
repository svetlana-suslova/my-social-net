import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';


const Profile = ({store, profile, isAuth}) => {

  if (!isAuth) return <Redirect to={'/login'} />

  return (
    <div>
      <ProfileInfo profile={profile}/>
      <MyPostsContainer store={store}/>
    </div>  
  );
}
export default Profile;