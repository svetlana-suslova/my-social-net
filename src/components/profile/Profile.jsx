import React from 'react';
// import s from './Profile.module.sass';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = ({profilePage, addPost, updateNewPostText}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts 
        posts={profilePage.posts} 
        addPost={addPost}
        newPostText={profilePage.newPostText}
        updateNewPostText={updateNewPostText}/>
      </div>  
    );
}
export default Profile;