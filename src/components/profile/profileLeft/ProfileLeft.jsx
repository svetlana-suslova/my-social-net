import React from 'react';
import ProfileStatus from './profileStatus/ProfileStatus';
import s from './ProfileLeft.module.sass';
import ProfileAvatar from '../profileAvatar/ProfileAvatar';

const ProfileLeft = ({profile, isOwner, savePhoto, status, updateUserStatus}) => {

  return (
    <div className={s.personalProfile}>
      <ProfileAvatar profile={profile} 
      isOwner={isOwner}
      savePhoto={savePhoto} />
      <h2 className={s.name}>{profile.fullName}</h2>
      <ProfileStatus isOwner ={isOwner} 
      status={status} 
      updateUserStatus={updateUserStatus} />
    </div>
  );
}

export default ProfileLeft;