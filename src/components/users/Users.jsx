import React from 'react';
import s from './Users.module.sass';
import userPhoto from '../../assets/img/user.png';

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
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Avatar"/>
                        </div>
                        <div>
                            {
                                u.followed 
                                ? <button onClick={ () => { unFollowUser(u.id) } }>Unfollow</button> 
                                : <button onClick={ () => { followUser(u.id) } }>Follow</button>
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