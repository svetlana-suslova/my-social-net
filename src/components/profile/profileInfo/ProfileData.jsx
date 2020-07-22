import React from 'react';
import s from './ProfileInfo.module.sass';

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <>
      { isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
      <div className={s.description}>
        <div className={s.name}>
          {profile.fullName}
        </div>
        <div className={s.data}>
          <span>About me:  </span>{profile.aboutMe}
        </div>
        <div className={s.data}>
          <span>Looking for a job:  </span>{profile.lookingForAJob ? "yes" : "no"}
        </div>
          {profile.lookingForAJob &&
            <div>
                <span>My professional skills:  </span>{profile.lookingForAJobDescription}
            </div>
          }
      </div>   
      <div className={s.contacts}>
        {Object.keys(profile.contacts).filter(key => key !== 'mainLink' && key !== 'vk').map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/> 
        })}
      </div>
    </>
  );
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><span>{contactTitle}</span>: {contactValue}</div>
}

export default ProfileData;