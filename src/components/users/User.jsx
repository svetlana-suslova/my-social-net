import React from 'react';
import styled from 'styled-components';
import userPhoto from '../../assets/img/avatar.png';
import {NavLink} from 'react-router-dom';
import { SmallButton, InvertedSmallButton } from '../common/buttons/Buttons';

const User = ( {user, followingProgress, unFollow, follow} ) => {
    
    const UserItem = styled.div`
        padding: 15px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;
    const UserPhoto = styled.div`
        width: 110px;
        height: 110px;
        img {
            border-radius: 50%;
        }
    `;
    
    return (   
        <UserItem>
                <UserPhoto>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar"/>
                    </NavLink>   
                </UserPhoto>
                <div>
                    <div>{user.name}</div>
                </div>
                <div>
                    {
                        user.followed
                        ? <SmallButton text="Unfollow" disabled={followingProgress.some(id => id === user.id)}
                        onClick={ () => { unFollow( user.id) } } />
                        : <InvertedSmallButton text="Follow" disabled={followingProgress.some(id => id === user.id)}
                        onClick={ () => { follow( user.id) } } />
                    }
                </div>
        </UserItem>
    );
}
export default User;