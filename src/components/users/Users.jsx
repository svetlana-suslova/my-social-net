import React from 'react';
import s from './Users.module.sass';
import userPhoto from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

const Users = ( {users, totalUsersCount, pageSize, currentPage, unFollowUser, followUser, onPageChanged} ) => {
    
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                { pages.map(p => {
                    return <span className={currentPage === p && s.selectedPage} 
                    onClick={ () => { onPageChanged(p) } }>{p}</span>
                }) }
            </div>
            {
                users.map( u => <div key={u.id}>
                    <span>
                        <div className={s.userPhoto}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Avatar"/>
                            </NavLink>   
                        </div>
                        <div>
                            {
                                u.followed 
                                ? <button onClick={ () => { 
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "2a11aa90-65a2-4566-adc6-10d5bc0cf795"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            unFollowUser(u.id)
                                        }
                                    });   
                                } }>Unfollow</button> 
                                : <button onClick={ () => { 
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "2a11aa90-65a2-4566-adc6-10d5bc0cf795"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            followUser(u.id)
                                        }
                                    });  
                                } }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>  
                </div>)
            }
        </div>
    );
}
export default Users;