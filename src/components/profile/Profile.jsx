import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';
import ProfilePersonality from './profilePersonality/ProfilePersonality';
import ProfileMenu from './profileMenu/ProfileMenu';
import s from './Profile.module.sass';

const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile, login}) => {
  return (
    <div>
      <div className={s.cover}></div>
      <ProfilePersonality profile={profile}
      isOwner={isOwner}
      savePhoto={savePhoto}
      status={status} 
      updateUserStatus={updateUserStatus} />
      <ProfileMenu />
      <ProfileInfo profile={profile} 
      isOwner={isOwner}
      savePhoto={savePhoto}
      saveProfile={saveProfile} />
    </div>  
  );
}
export default Profile;
