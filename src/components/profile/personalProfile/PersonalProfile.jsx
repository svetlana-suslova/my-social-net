import React from 'react';
import ProfileStatusWithHooks from '../profileInfo/ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/user.png';
import s from './PersonalProfile.module.sass';

const PersonalProfile = ({profile, isOwner, savePhoto, status, updateUserStatus}) => {
  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  return (
    <div className={s.personalProfile}>
      <div className={s.avatar}>
        {/* <img src={profile.photos.large || userPhoto} alt="avatar"/> */}
        <img src={userPhoto} alt="avatar"/>
        {
          isOwner && <input type="file" onChange={onProfilePhotoSelected}/>
        }
      </div>
      <div className={s.nick}>Nick</div>
      <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
    </div>
  );
}

export default PersonalProfile;