import React from 'react';
import ProfileStatus from './ProfileStatus';
import s from './ProfilePersonality.module.sass';
import ProfileAvatar from '../profileAvatar/ProfileAvatar';

const ProfilePersonality = ({profile, isOwner, savePhoto, status, updateUserStatus}) => {

  return (
    <div className={s.personalProfile}>
      <ProfileAvatar profile={profile} 
      isOwner={isOwner}
      savePhoto={savePhoto}/>
      <h2 className={s.name}>{profile.fullName}</h2>
      <div className={s.status}>
        <ProfileStatus isOwner ={isOwner} status={status} updateUserStatus={updateUserStatus}/>
      </div>
    </div>
  );
}

export default ProfilePersonality;