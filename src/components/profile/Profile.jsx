import React from 'react';
// import s from './Profile.module.sass';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({state}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={state.posts}/>
      </div>  
    );
}
export default Profile;