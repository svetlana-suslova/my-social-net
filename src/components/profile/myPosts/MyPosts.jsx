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
        </div>
        <textarea></textarea>
        <button>Add post</button>
        <div className="posts">
          <Post message="Hi there!" likes='5'/> 
          <Post message="How are you?" likes='12'/>
        </div>  
      </>
    );
}
export default MyPosts;