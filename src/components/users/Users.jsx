import React from 'react';
import User from './User';
import s from './Users.module.sass';

const Users = ( {users, followingProgress, unFollow, follow} ) => {
    
    return (
        <div className={s.userContent}>
            {
                users.map( u => <User key={u.id}
                                user={u}
                                followingProgress={followingProgress} 
                                unFollow={unFollow} 
                                follow={follow}/> )       
            }
        </div>
    );
}
export default Users;