import React from 'react';
import Post from './Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength } from '../../../../utils/validators';
import { FormTextArea } from '../../../common/formControls/FormControls';
import { MediumButton } from '../../../common/buttons/Buttons';
import styled from 'styled-components';

const maxLength10 = maxLength(50);
  const ProfileWrapper = styled.div`
    background: #ffffff;
    line-height: 25px;
    padding: 15px;
    margin-left: 130px;
  `;
  const Form = styled.form`
    max-width: 350px;
  `;
  const Posts = styled.div`
    margin-top: 20px;
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
            <div>
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
    <ProfileWrapper>
      <AddPostsReduxForm onSubmit={onPostAdd} isOwner={isOwner}/>
      <Posts>
        {postsElements}
      </Posts>  
    </ProfileWrapper>
  );
}
export default MyPosts;