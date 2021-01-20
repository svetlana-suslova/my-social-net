import React from 'react';
import styled from 'styled-components';

const ProfileData = ({profile, isOwner, goToEditMode}) => {

  const Description = styled.div`
    margin-bottom: 10px;
  `;
  const Name = styled.div`
    text-transform: capitalize;
  `;
  const Contacts = styled.div`
    margin-bottom: 5px;
    a {
      font-style: italic;
      font-size: 13px;
    }
  `;

  return (
    <>
      <Description>
        <Name>
        <span><b>Name: </b></span>{profile.fullName}
        </Name>
        <div>
          <span><b>About me: </b></span>{profile.aboutMe}
        </div>
        <div>
          <span><b>Looking for a job: </b></span>{profile.lookingForAJob ? "yes" : "no"}
        </div>
          {profile.lookingForAJob &&
            <div>
                <span><b>Professional skills: </b></span>{profile.lookingForAJobDescription}
            </div>
          }
      </Description>
      <Contacts>
        {Object.keys(profile.contacts).filter(key => key !== 'mainLink' && key !== 'vk').map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/> 
        })}
      </Contacts>
      { isOwner && 
      <p>
        <a onClick={goToEditMode} title="Edit profile"><i className="fa fa-pencil" aria-hidden="true"></i> Edit profile</a>
      </p> }
    </>
  );
}

const Contact = ({contactTitle, contactValue}) => {
  return <div><span><b>{contactTitle}: </b></span><a target="_blank" rel="noopener noreferrer" href={contactValue}>{contactValue}</a></div>
}

export default ProfileData;