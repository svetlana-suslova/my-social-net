import React from 'react';
import s from './ProfileInfo.module.sass';
import { reduxForm, Field } from 'redux-form'
import { required, maxLength } from '../../../../utils/validators';
import { FormInput, FormTextArea, FormError } from '../../../common/formControls/FormControls';
import { MediumButton } from '../../../common/buttons/Buttons';
import styled from 'styled-components';

const maxLength50 = maxLength(50);
const maxLength20 = maxLength(20);

const ProfileDataForm = ({handleSubmit, profile, error}) => {

  const Form = styled.form`
    max-width: 350px;
  `;
    return (
      <Form onSubmit={handleSubmit}>
        { error && <FormError error={error} /> 
        }
        <div className={s.description}>
            <div className={s.name}>
                <span><b>Name: </b></span>
                <Field name="fullName" 
                placeholder="Name"
                component={FormInput}
                validate={[required, maxLength20]}/>
            </div>
            <div>
                <span><b>About me: </b></span>
                <Field name="aboutMe"
                placeholder="About me"
                component={FormTextArea}
                validate={[required, maxLength50]}/>
            </div>
            <div>
                <div><b>Looking for a job: </b></div>
                <Field name="lookingForAJob"
                type="checkbox"
                className={s.check}
                component="input"/>
            </div>
            <div>
                <span><b>Professional skills: </b></span>
                <Field name="lookingForAJobDescription" 
                placeholder="List your skills here"
                component={FormTextArea}
                validate={[required, maxLength50]}/>
            </div>
        </div>   
        <div className={s.contacts}>
          {Object.keys(profile.contacts).filter(key => key !== 'mainLink' && key !== 'vk').map(key => {
          return <div key={key}>
              <span><b>{key}: </b></span>
              <Field name={`contacts.${key}`} 
                placeholder={key}
                component={FormInput}/>
          </div> 
          })}
        </div>
        <div><MediumButton text="Save"/></div>
      </Form>
    );
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;