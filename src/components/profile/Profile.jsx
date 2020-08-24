import React from 'react';
import ProfileLeft from './profileLeft/ProfileLeft';
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
      <ProfileLeft profile={profile}
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
