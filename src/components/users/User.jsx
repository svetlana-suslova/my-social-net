import React from 'react';
import s from './Users.module.sass';
import userPhoto from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';

const User = ( {user, followingProgress, unFollow, follow} ) => {
    
    return (   
        <div key={user.id}>
            <span>
                <div className={s.userPhoto}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar"/>
                    </NavLink>   
                </div>
                <div>
                    {
                        user.followed 
                        ? <button disabled={followingProgress.some(id => id === user.id)} 
                        onClick={ () => { unFollow( user.id) } }>Unfollow</button> 
                        : <button disabled={followingProgress.some(id => id === user.id)} 
                        onClick={ () => { follow( user.id) } }>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>  
        </div>
    );
}
export default User;