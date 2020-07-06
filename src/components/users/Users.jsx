import React from 'react';
import s from './Users.module.sass';
import userPhoto from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';
import UsersPaginator from './UsersPaginator';

const Users = ( {users, totalUsersCount, pageSize, currentPage, onPageChanged, followingProgress, unFollow, follow} ) => {
    
    return (
        <div>
            <UsersPaginator totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}/>
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