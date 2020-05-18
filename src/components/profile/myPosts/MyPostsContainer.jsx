import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({store}) => {
  let state = store.getState();

  let addNewPost = () => {
    store.dispatch(addPostCreator());  
  }
  let updateNewPost = (text) => {
    let action = updateNewPostTextCreator(text);
    store.dispatch(action);
  }

  return (
    <MyPosts updateNewPost={updateNewPost}
    addNewPost={addNewPost}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}/>
  );
}
export default MyPostsContainer;