import React from 'react';
// import s from './Profile.module.sass';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({posts}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={posts}/>
      </div>  
    );
}
export default Profile;