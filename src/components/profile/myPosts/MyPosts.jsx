import React from 'react';
import Post from './post/Post';
import s from './MyPosts.module.sass';

const MyPosts = () => {

  let postsData = [
    {id: 1, text: 'Hi there!', like: 5},
    {id: 2, text: 'How are you?', like: 12}
  ];

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
        <Post message={postsData[0].text} likes={postsData[0].like} id={postsData[0].id}/> 
        <Post message={postsData[1].text} likes={postsData[1].like} id={postsData[1].id}/>
      </div>  
    </div>
  );
}
export default MyPosts;