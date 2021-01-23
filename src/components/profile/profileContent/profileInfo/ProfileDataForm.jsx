import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { required, maxLength } from '../../../../utils/validators';
import { FormInput, FormTextArea, FormError } from '../../../common/formControls/FormControls';
import { MediumButton } from '../../../common/buttons/Buttons';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 350px;
`;
const Description = styled.div`
  margin-bottom: 10px;
`;
const Name = styled.div`
  text-transform: capitalize;
`;
const Contacts = styled.div`
  margin-bottom: 5px;
  a {
    font-style: italic;
    font-size: 13px;
  }
`;

const maxLength50 = maxLength(50);
const maxLength20 = maxLength(20);

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return (
      <Form onSubmit={handleSubmit}>
        { error && <FormError error={error} /> 
        }
        <Description>
            <Name>
                <span><b>Name: </b></span>
                <Field name="fullName" 
                placeholder="Name"
                component={FormInput}
                validate={[required, maxLength20]}/>
            </Name>
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
                component="input"/>
            </div>
            <div>
                <span><b>Professional skills: </b></span>
                <Field name="lookingForAJobDescription" 
                placeholder="List your skills here"
                component={FormTextArea}
                validate={[required, maxLength50]}/>
            </div>
        </Description>   
        <Contacts>
          {Object.keys(profile.contacts).filter(key => key !== 'mainLink' && key !== 'vk').map(key => {
          return <div key={key}>
              <span><b>{key}: </b></span>
              <Field name={`contacts.${key}`} 
                placeholder={key}
                component={FormInput}/>
          </div> 
          })}
        </Contacts>
        <div><MediumButton text="Save"/></div>
      </Form>
    );
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;