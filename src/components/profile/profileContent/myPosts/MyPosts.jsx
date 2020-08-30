import React from 'react';
import Post from './Post';
import s from './MyPosts.module.sass';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength } from '../../../../utils/validators';
import { FormTextArea } from '../../../common/formControls/FormControls';
import { MediumButton } from '../../../common/buttons/Buttons';
import styled from 'styled-components';

const maxLength10 = maxLength(50);
  const Form = styled.form`
    max-width: 350px;
  `;

const AddPostsForm = ({handleSubmit, isOwner}) => {

  return (
    <>
      {
        isOwner &&
        <Form onSubmit={handleSubmit}>
            <div>
                <Field name="newPostText" 
                placeholder="Add your post" 
                component={FormTextArea}
                validate={[required, maxLength10]}/>
            </div>
            <div className={s.formButton}>
              <MediumButton text="Add post"/>
            </div>
        </Form>
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