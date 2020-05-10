import React from 'react';
import Post from './post/Post';
import s from './MyPosts.module.sass';

const MyPosts = ({posts}) => {

  let postsElements = posts
    .map(p =>  <Post message={p.text} likes={p.like} id={p.id}/>);

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
        {postsElements}
      </div>  
    </div>
  );
}
export default MyPosts;