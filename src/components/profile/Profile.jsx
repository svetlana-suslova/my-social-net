import React from 'react';
// import s from './Profile.module.sass';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({state, addPost}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={state.posts} addPost={addPost}/>
      </div>  
    );
}
export default Profile;