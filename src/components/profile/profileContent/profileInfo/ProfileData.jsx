import React from 'react';
import s from './ProfileInfo.module.sass';

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <>
      <div className={s.description}>
        <div className={s.name}>
        <span><b>Name: </b></span>{profile.fullName}
        </div>
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
      </div>
      <div className={s.contacts}>
        {Object.keys(profile.contacts).filter(key => key !== 'mainLink' && key !== 'vk').map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/> 
        })}
      </div>
      { isOwner && 
      <p className={s.edit}>
        <a onClick={goToEditMode} title="Edit profile"><i className="fa fa-pencil" aria-hidden="true"></i> Edit profile</a>
      </p> }
    </>
  );
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><span><b>{contactTitle}: </b></span><a target="_blank" rel="noopener noreferrer" href={contactValue}>{contactValue}</a></div>
}

export default ProfileData;