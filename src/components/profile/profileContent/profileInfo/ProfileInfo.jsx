import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileDataReduxForm from './ProfileDataForm';
import ProfileData from './ProfileData';

const ProfileWrapper = styled.div`
  background: #ffffff;
  line-height: 25px;
  padding: 15px;
  margin-left: 130px; 
  b {
    font-weight: 600;

  }
  a {
    color: #404040;
    text-decoration: none;
    &:link, &:visited, &:hover {
      color: #404040;
      text-decoration: none;
      cursor: pointer;
    }
  }   
`;
const ProfileInfo = ({profile, isOwner, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);
  
  const onSubmitProfileData = ({ aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts }) => {
    saveProfile( aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return (
    <ProfileWrapper>
      { editMode 
      ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmitProfileData}/> 
      : <ProfileData goToEditMode={ () => {setEditMode(true)} } profile={profile} isOwner={isOwner} /> }
    </ProfileWrapper>
  );
}

export default ProfileInfo;