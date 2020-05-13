import React from 'react';
import Post from './post/Post';
import s from './MyPosts.module.sass';

const MyPosts = ({posts, addPost}) => {

  let postsElements = posts
    .map(p =>  <Post message={p.text} likes={p.like} id={p.id}/>);
  
  let newPostElement = React.createRef();
  let addNewPost = () => {
    let text = newPostElement.current.value;
    addPost(text);
    newPostElement.current.value = '';    
  }


  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>  
    </div>
  );
}
export default MyPosts;