import React from 'react';
import UsersPaginator from './UsersPaginator';
import User from './User';

const Users = ( {users, totalUsersCount, pageSize, currentPage, onPageChanged, followingProgress, unFollow, follow, portionSize} ) => {
    
    return (
        <div>
            <UsersPaginator totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            portionSize={portionSize}/>
            <div>
                {
                    users.map( u => <User key={u.id}
                                    user={u}
                                    followingProgress={followingProgress} 
                                    unFollow={unFollow} 
                                    follow={follow}/> )       
                }
            </div>   
        </div>
    );
}
export default Users;