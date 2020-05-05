import React from 'react';
import Post from '../post/Post';
// import s from './MyPosts.module.sass';

const MyPosts = () => {
    return (
      <>
        <div>
          My posts
        </div>
        <div>
          New post
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className="posts">
          <Post /> 
          <Post /> 
          <Post /> 
          <Post /> 
          <Post /> 
        </div>  
      </>
    );
}
export default MyPosts;