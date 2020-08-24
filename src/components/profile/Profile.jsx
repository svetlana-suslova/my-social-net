import React from 'react';
import ProfileLeftBlock from './profileLeftBlock/ProfileLeftBlock';
import s from './Profile.module.sass';
import ProfileContent from './profileContent/ProfileContent';
import Loader from './../common/loader/Loader';

const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
  
  if (!profile) {
    return <Loader />
  }
  return (
    <>
      <div className={s.cover}></div>
      <ProfileLeftBlock profile={profile}
      isOwner={isOwner}
      savePhoto={savePhoto}
      status={status} 
      updateUserStatus={updateUserStatus} />
      <ProfileContent profile={profile} 
      isOwner={isOwner}
      saveProfile={saveProfile} />
    </>  
  );
}
export default Profile;
