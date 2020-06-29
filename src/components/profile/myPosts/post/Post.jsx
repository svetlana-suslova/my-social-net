import React from 'react';
import s from './Post.module.sass';
import avatar from '../../../../assets/img/avatar.png';

const Post = ({message, likes}) => {
    return (
      <div className={s.item}>
        <img src={avatar} alt="ava"/>
        {message}
        <div>
          <span>{`likes: ${likes}`}</span>
        </div>
      </div>
    );
}
export default Post;