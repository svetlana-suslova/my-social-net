import React from 'react';
import s from './Profile.module.sass';
import MyPosts from './myPosts/MyPosts';


const Profile = () => {
    return (
      <div>
        <div className={s.img}>
          <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" alt="brain"/>
        </div>
        <div>
          ava+descr
        </div>
        <MyPosts />
      </div>  
    );
}
export default Profile;