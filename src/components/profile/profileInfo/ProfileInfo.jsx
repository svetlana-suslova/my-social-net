import React, { useState } from 'react';
import s from './ProfileInfo.module.sass';
import Loader from '../../common/loader/Loader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/user.png';
import ProfileDataReduxForm from './ProfileDataForm';
import ProfileData from './ProfileData';


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
  let [editMode, setEditMode] = useState(false);
  
  if (!profile) {
    return <Loader />
  }

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
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
      <div className={s.avatar}>
        <img src={profile.photos.large || userPhoto} alt="avatar"/>
        {
          isOwner && <input type="file" onChange={onProfilePhotoSelected}/>
        }
      </div>
      <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
      { editMode 
      ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmitProfileData}/> 
      : <ProfileData goToEditMode={ () => {setEditMode(true)} } profile={profile} isOwner={isOwner} /> }
    </div>
  );
}

export default ProfileInfo;