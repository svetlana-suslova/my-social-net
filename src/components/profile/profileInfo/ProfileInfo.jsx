import React from 'react';
import s from './ProfileInfo.module.sass';
import Loader from '../../common/loader/Loader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/user.png';


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Loader />
  }

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <>
      <div className={s.profileWrapper}>
        <div className={s.avatar}>
          <img src={profile.photos.large || userPhoto} alt="avatar"/>
          {
            isOwner && <input type="file" onChange={onProfilePhotoSelected}/>
          }
        </div>
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
        <div className={s.description}>
          <div className={s.name}>
            {profile.fullName}
          </div>
          <div className={s.data}>
            {profile.aboutMe}
          </div>
          <div className={s.data}>
            {`Looking for a job:  ${profile.lookingForAJobDescription}`}
          </div>
          <div className={s.data}>
            {`WebSite:  ${profile.contacts.facebook}`}
          </div>
        </div> 
      </div>
    </> 
  );
}
export default ProfileInfo;