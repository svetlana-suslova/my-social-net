import React from 'react';
import s from './ProfileInfo.module.sass';


const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" alt="brain"/>
        </div>
        <div className={s.description}>
          ava+descr
        </div>
      </div>  
    );
}
export default ProfileInfo;