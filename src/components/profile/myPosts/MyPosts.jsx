import React from 'react';
import Post from './post/Post';
import s from './MyPosts.module.sass';

const MyPosts = ({posts, newPostText, dispatch}) => {

  let postsElements = posts
    .map(p =>  <Post message={p.text} likes={p.like} id={p.id}/>);
  
  let newPostElement = React.createRef();
  
  let addNewPost = () => {
    dispatch( {type: 'ADD-POST'} );  
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    dispatch(action);
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