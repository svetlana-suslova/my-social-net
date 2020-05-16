import React from 'react';
// import s from './Profile.module.sass';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({profilePage, dispatch}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts 
        posts={profilePage.posts} 
        dispatch={dispatch}
        newPostText={profilePage.newPostText}/>
      </div>  
    );
}
export default Profile;