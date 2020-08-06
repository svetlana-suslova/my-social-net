import React from 'react';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/img/user.png';
import s from './ProfilePersonality.module.sass';

const ProfilePersonality = ({profile, isOwner, savePhoto, status, updateUserStatus}) => {

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  return (
    <div className={s.personalProfile}>
      <div className={s.avatar}>
        <img src={profile.photos.large || userPhoto} alt="avatar"/>
        {
          isOwner && <input type="file" onChange={onProfilePhotoSelected}/>
        }
      </div>
      <h2 className={s.name}>{profile.fullName}</h2>
      <div className={s.status}>
        <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
      </div>
    </div>
  );
}

export default ProfilePersonality;