import React from 'react';
import ProfileStatusWithHooks from '../profileInfo/ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/user.png';
import s from './ProfilePersonality.module.sass';
import Loader from '../../common/loader/Loader';

const ProfilePersonality = ({profile, isOwner, savePhoto, status, updateUserStatus}) => {
  if (!profile) {
    return <Loader />
  }
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
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
      </div>
    </div>
  );
}

export default ProfilePersonality;