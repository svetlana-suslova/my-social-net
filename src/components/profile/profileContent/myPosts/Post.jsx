import React from 'react';
import s from './MyPosts.module.sass';
import ProfileAvatar from '../../profileAvatar/ProfileAvatar';

const Post = ({message, likes, profile}) => {
    return (
      <div className={s.description}>
        <div className={s.messageAvatar}>
          <ProfileAvatar profile={profile}/>
        </div>
        <div className={s.profileMessage}>
          {message}
          <span className={s.profileLike}>
            <i className="fa fa-heart"></i>
            <span className={s.likeCount}>{likes}</span>
          </span>
        </div>
      </div>
    );
}
export default Post;