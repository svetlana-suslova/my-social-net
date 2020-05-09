import React from 'react';
import Post from './post/Post';
import s from './MyPosts.module.sass';

const MyPosts = () => {

  let posts = [
    {id: 1, text: 'Hi there!', like: 5},
    {id: 2, text: 'How are you?', like: 12}
  ];
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