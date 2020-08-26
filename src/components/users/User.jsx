import React from 'react';
import s from './Users.module.sass';
import userPhoto from '../../assets/img/avatar.png';
import {NavLink} from 'react-router-dom';
import { MainSmallButton, InvertSmallButton } from '../common/buttons/Buttons';

const User = ( {user, followingProgress, unFollow, follow} ) => {
    
    return (   
        <div className={s.userItem}>
                <div className={s.userPhoto}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar"/>
                    </NavLink>   
                </div>
                <div>
                    <div>{user.name}</div>
                </div>
                <div>
                    {
                        user.followed
                        ? <MainSmallButton text="Unfollow" disabled={followingProgress.some(id => id === user.id)}
                        onClick={ () => { unFollow( user.id) } } />
                        : <InvertSmallButton text="Follow" disabled={followingProgress.some(id => id === user.id)}
                        onClick={ () => { follow( user.id) } } />
                    }
                </div>
        </div>
    );
}
export default User;