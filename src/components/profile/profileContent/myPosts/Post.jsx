import React from 'react';
import styled from 'styled-components';
import ProfileAvatar from '../../profileAvatar/ProfileAvatar';

const Description = styled.div`
  margin-bottom: 10px;
`;
const ProfileMessage = styled.div`
  padding-left: 50px;
`;
const MessageAvatar = styled.div`
  width: 70px;
  height: 70px;
`;
const Like = styled.span`
  color: #e6381b;
  padding: 10px;
`;
const LikeCount = styled.span`
  color: #333;
  padding: 3px;
`;

const Post = ({message, likes, profile}) => {

    return (
      <Description>
        <MessageAvatar>
          <ProfileAvatar profile={profile}/>
        </MessageAvatar>
        <ProfileMessage>
          {message}
          <Like>
            <i className="fa fa-heart"></i>
            <LikeCount>{likes}</LikeCount>
          </Like>
        </ProfileMessage>
      </Description>
    );
}
export default Post;