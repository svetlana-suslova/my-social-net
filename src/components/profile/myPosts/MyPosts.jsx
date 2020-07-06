import React from 'react';
import Post from './post/Post';
import s from './MyPosts.module.sass';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength } from '../../../utils/validators';
import { TextArea } from '../../common/formControls/FormControls';

const maxLength10 = maxLength(10);

const AddPostsForm = ({handleSubmit}) => {
  return (
      <form onSubmit={handleSubmit}>
          <div>
              <Field name="newPostText" 
              placeholder="Add your post" 
              component={TextArea}
              validate={[required, maxLength10]}/>
          </div>
          <div>
              <button>Add post</button>
          </div>
      </form>
  )       
}

const AddPostsReduxForm = reduxForm({form: 'addPosts'})(AddPostsForm);

const MyPosts = ({posts, addPost}) => {

  let postsElements = 
    posts.map(p =>  <Post message={p.text} likes={p.like} id={p.id} key={p.id}/>);
  
  const onPostAdd = (formData) => {
    addPost(formData.newPostText);  
  }

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <AddPostsReduxForm onSubmit={onPostAdd}/>
      <div className={s.posts}>
        {postsElements}
      </div>  
    </div>
  );
}
export default MyPosts;