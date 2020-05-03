import React from 'react';
import s from './Profile.module.sass';

const Profile = () => {
    return (
      <div className={s.content}>
        <div>
          <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" alt="brain"/>
        </div>
        <div>
          ava+descr
        </div>
        <div>
          My posts
        </div>
        <div>
          New post
        </div>
        <div className="posts">
          <div className={s.item}>
            post1
          </div>
          <div className={s.item}>
            post2
          </div>
        </div>    
      </div>  
    );
}
export default Profile;