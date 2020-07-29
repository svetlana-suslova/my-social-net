import React, { useState } from 'react';
import s from './ProfileInfo.module.sass';
import Loader from '../../common/loader/Loader';
import userPhoto from '../../../assets/img/user.png';
import ProfileDataReduxForm from './ProfileDataForm';
import ProfileData from './ProfileData';


const ProfileInfo = ({profile, isOwner, saveProfile}) => {
  let [editMode, setEditMode] = useState(false);
  
  if (!profile) {
    return <Loader />
  }

  

  const onSubmitProfileData = ({ aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts }) => {
    saveProfile( aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return (
    <div className={s.profileWrapper}>
      { editMode 
      ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmitProfileData}/> 
      : <ProfileData goToEditMode={ () => {setEditMode(true)} } profile={profile} isOwner={isOwner} /> }
    </div>
  );
}

export default ProfileInfo;