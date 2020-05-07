import React from 'react';
import Post from './post/Post';
import s from './MyPosts.module.sass';

const MyPosts = () => {
    return (
      <div className={s.content}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          <Post message="Hi there!" likes='5'/> 
          <Post message="How are you?" likes='12'/>
        </div>  
      </div>
    );
}
export default MyPosts;