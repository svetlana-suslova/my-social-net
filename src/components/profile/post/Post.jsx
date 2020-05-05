import React from 'react';
import s from './Post.module.sass';

const Post = () => {
    return (
      <div className={s.item}>
        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/PL/pl/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="ava"/>
        post1
        <div>
          <span>like</span>
        </div>
      </div>
    );
}
export default Post;