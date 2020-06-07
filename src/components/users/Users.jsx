import React from 'react';
import s from './Users.module.sass';
import userPhoto from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';

const Users = ( {users, totalUsersCount, pageSize, currentPage, onPageChanged, followingProgress, unFollow, follow} ) => {
    
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
                                ? <button disabled={followingProgress.some(id => id === u.id)} 
                                onClick={ () => { unFollow( u.id) } }>Unfollow</button> 
                                : <button disabled={followingProgress.some(id => id === u.id)} 
                                onClick={ () => { follow( u.id) } }>Follow</button>
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