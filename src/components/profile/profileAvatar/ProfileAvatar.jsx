import React from 'react';
import userPhoto from '../../../assets/img/avatar.png';
import styled from 'styled-components';

const ProfileAvatar = ({profile, isOwner, savePhoto}) => {

  const Avatar = styled.div`
    width: 90%;
    margin-left: 5%;
    img {
      border-radius: 50%;
    }
  `;
  const UploadLabel = styled.label`
    display: block;
    text-align: center;
    padding: 5px 0;
    cursor: pointer;
    margin: 0 auto;
    span {
      font-weight: 400;
    }
    i {
      font-size: 20px;
      padding: 3px;
    }
  `;

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  return (
      <Avatar>
        <img src={profile.photos.large || userPhoto} alt="avatar"/>
        {
          isOwner &&
          <>
            <UploadLabel htmlFor="file-upload">
              <i className="fa fa-cloud-upload"></i>
              <span>Change photo</span>
            </UploadLabel>
            <input id="file-upload" type="file" onChange={onProfilePhotoSelected}/>
          </>
        }
      </Avatar>
  );
}

export default ProfileAvatar;