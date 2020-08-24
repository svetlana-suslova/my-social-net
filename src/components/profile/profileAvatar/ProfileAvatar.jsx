import React from 'react';
import userPhoto from '../../../assets/img/avatar.png';
import s from './ProfileAvatar.module.sass';

const ProfileAvatar = ({profile, isOwner, savePhoto}) => {

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  return (
      <div className={s.avatar}>
        <img src={profile.photos.large || userPhoto} alt="avatar"/>
        {
          isOwner &&
          <>
            <label htmlFor="file-upload" className={s.fileUpload}>
              <i className="fa fa-cloud-upload"></i>
              <span className={s.fileUploadLabel}>Change photo</span>
            </label>
            <input id="file-upload" type="file" onChange={onProfilePhotoSelected}/>
          </>
        }
      </div>
  );
}

export default ProfileAvatar;