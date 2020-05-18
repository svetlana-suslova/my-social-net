import React from 'react';
import Post from './post/Post';
import s from './MyPosts.module.sass';

const MyPosts = ({posts, addNewPost, updateNewPost, newPostText}) => {

  let postsElements = 
    posts.map(p =>  <Post message={p.text} likes={p.like} id={p.id}/>);
  
  let onPostAdd = () => {
    addNewPost();  
  }
  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPost(text);
  }

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} 
          value={newPostText}
          onChange={onPostChange}/>
        </div>
        <div>
          <button onClick={onPostAdd}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>  
    </div>
  );
}
export default MyPosts;