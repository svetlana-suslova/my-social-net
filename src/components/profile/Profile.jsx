import React from 'react';
import ProfileLeft from './profileLeft/ProfileLeft';
import cover from '../../assets/img/cover.jpg';
import ProfileContent from './profileContent/ProfileContent';
import Loader from './../common/loader/Loader';
import styled from 'styled-components';

const Cover = styled.div`
  height: 240px;
  background-image: url(${cover});
  background-size: cover;
  background-position: center;
`;

const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

  if (!profile) {
    return <Loader />
  }
  return (
    <>
      <Cover></Cover>
      <ProfileLeft profile={profile}
      isOwner={isOwner}
      savePhoto={savePhoto}
      status={status} 
      updateUserStatus={updateUserStatus} />
      <ProfileContent profile={profile} 
      isOwner={isOwner}
      saveProfile={saveProfile} />
    </>  
  );
}
export default Profile;
