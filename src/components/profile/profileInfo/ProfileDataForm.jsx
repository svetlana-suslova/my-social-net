import React from 'react';
import s from './ProfileInfo.module.sass';
import { reduxForm, Field } from 'redux-form'
import { required, maxLength } from '../../../utils/validators';
import { Input, TextArea } from '../../common/formControls/FormControls';
import style from '../../common/formControls/FormControls.module.sass';

const maxLength50 = maxLength(50);
const maxLength20 = maxLength(20);

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
      <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        { error && <div className={style.formError}>
            {error}</div> 
        }
        <div className={s.description}>
            <div className={s.name}>
                <span>Name: </span>
                <Field name="fullName" 
                placeholder="Name"
                component={Input}
                validate={[required, maxLength20]}/>
            </div>
            <div className={s.data}>
                <span>About me: </span>
                <Field name="aboutMe" 
                placeholder="About me"
                component={TextArea}
                validate={[required, maxLength50]}/>
            </div>
            <div className={s.data}>
                <span>Looking for a job: </span>
                <Field name="lookingForAJob"
                type="checkbox"
                component={Input}/>
            </div>
            <div>
                <span>My professional skills: </span>
                <Field name="lookingForAJobDescription" 
                placeholder="List your skills here"
                component={TextArea}
                validate={[required, maxLength50]}/>
            </div>
        </div>   
        <div className={s.contacts}>
          {Object.keys(profile.contacts).filter(key => key !== 'mainLink' && key !== 'vk').map(key => {
          return <div key={key}>
              <span>{key}: </span>
              <Field name={`contacts.${key}`} 
                placeholder={key}
                component={Input}/>
          </div> 
          })}
        </div>
      </form>
    );
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;