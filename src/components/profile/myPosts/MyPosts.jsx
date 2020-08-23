import React from 'react';
import Post from './post/Post';
import s from '../profileContent/ProfileInfo.module.sass';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength } from '../../../utils/validators';
import { TextArea } from '../../common/formControls/FormControls';

const maxLength10 = maxLength(50);

const AddPostsForm = ({handleSubmit, isOwner}) => {
  return (
    <>
      {
        isOwner &&
        <form className={s.profileForm} onSubmit={handleSubmit}>
            <div>
                <Field name="newPostText" 
                placeholder="Add your post" 
                component={TextArea}
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button className={s.formButton}>Add post</button>
            </div>
        </form>
      }
    </> 
  )       
}

const AddPostsReduxForm = reduxForm({form: 'addPosts'})(AddPostsForm);

const MyPosts = ({posts, addPost, profile, isOwner}) => {

  let postsElements = 
    posts.map(p =>  <Post profile={profile} message={p.text} likes={p.like} id={p.id} key={p.id}/>);
  
  const onPostAdd = (formData) => {
    addPost(formData.newPostText);  
  }

  return (
    <div className={s.profileWrapper}>
      <AddPostsReduxForm onSubmit={onPostAdd} isOwner={isOwner}/>
      <div className={s.posts}>
        {postsElements}
      </div>  
    </div>
  );
}
export default MyPosts;