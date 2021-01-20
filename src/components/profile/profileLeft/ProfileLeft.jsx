import React from 'react';
import ProfileStatus from './profileStatus/ProfileStatus';
import ProfileAvatar from '../profileAvatar/ProfileAvatar';
import styled from 'styled-components';
import LeftPanel from '../../common/blocks/LeftPanel';

const ProfileLeft = ({profile, isOwner, savePhoto, status, updateUserStatus}) => {

  const Name = styled.h2`
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  `;

  return (
    <LeftPanel>
      <ProfileAvatar profile={profile} 
      isOwner={isOwner}
      savePhoto={savePhoto} />
      <Name>{profile.fullName}</Name>
      <ProfileStatus isOwner ={isOwner} 
      status={status} 
      updateUserStatus={updateUserStatus} />
    </LeftPanel>
  );
}

export default ProfileLeft;