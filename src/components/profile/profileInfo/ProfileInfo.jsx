import React from 'react';
import s from './ProfileInfo.module.sass';
import Loader from '../../loader/Loader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = ({profile, status}) => {
  if (!profile) {
    return <Loader />
  }
  return (
    <>
      <div className={s.profileWrapper}>
        <div className={s.avatar}>
          <img src={profile.photos.large} alt="avatar"/>
        </div>
        <ProfileStatus status={status}/>
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