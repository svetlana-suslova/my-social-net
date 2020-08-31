import React from 'react';
import ProfileStatus from './profileStatus/ProfileStatus';
import ProfileAvatar from '../profileAvatar/ProfileAvatar';
import styled from 'styled-components';

const ProfileLeft = ({profile, isOwner, savePhoto, status, updateUserStatus}) => {

  const PersonalProfile = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
    position: absolute;
    width: 240px;
    height: 100%;
    top: 0px;
    padding: 50px 10px 0px 10px;
    margin-left: -240px;
    background: #ffffff;
    z-index: 99;
  `;
  const Name = styled.h2`
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  `;

  return (
    <PersonalProfile>
      <ProfileAvatar profile={profile} 
      isOwner={isOwner}
      savePhoto={savePhoto} />
      <Name>{profile.fullName}</Name>
      <ProfileStatus isOwner ={isOwner} 
      status={status} 
      updateUserStatus={updateUserStatus} />
    </PersonalProfile>
  );
}

export default ProfileLeft;