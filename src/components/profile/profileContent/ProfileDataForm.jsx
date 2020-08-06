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
      <form className={s.frofileForm} onSubmit={handleSubmit}>
        { error && <div className={style.formError}>
            {error}</div> 
        }
        <div className={s.description}>
            <div className={s.name}>
                <span><b>Name: </b></span>
                <Field name="fullName" 
                placeholder="Name"
                component={Input}
                validate={[required, maxLength20]}/>
            </div>
            <div>
                <span><b>About me: </b></span>
                <Field name="aboutMe"
                placeholder="About me"
                component={TextArea}
                validate={[required, maxLength50]}/>
            </div>
            <div>
                <span><b>Looking for a job: </b></span>
                <Field name="lookingForAJob"
                type="checkbox"
                className={s.check}
                component={Input}/>
            </div>
            <div>
                <span><b>Professional skills: </b></span>
                <Field name="lookingForAJobDescription" 
                placeholder="List your skills here"
                component={TextArea}
                validate={[required, maxLength50]}/>
            </div>
        </div>   
        <div className={s.contacts}>
          {Object.keys(profile.contacts).filter(key => key !== 'mainLink' && key !== 'vk').map(key => {
          return <div key={key}>
              <span><b>{key}: </b></span>
              <Field name={`contacts.${key}`} 
                placeholder={key}
                component={Input}/>
          </div> 
          })}
        </div>
        <div className={s.save}><button className={s.saveButton}>Save</button></div>
      </form>
    );
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;