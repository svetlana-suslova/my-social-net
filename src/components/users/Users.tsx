import React from 'react';
import User from './User';
import styled from 'styled-components';
import {userType} from '../../types/types';

type props = {
    users: Array<userType>, 
    followingProgress: Array<number> 
    unFollow: (userId: number) => void 
    follow: (userId: number) => void
}

const Users: React.FC<props> = ( {users, followingProgress, unFollow, follow} ) => {

    const UserContent = styled.div`
        background: #ffffff;
        line-height: 25px;
        padding: 15px;
        margin-left: 130px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    `;
    
    return (
        <UserContent>
            {
                users.map( u => <User key={u.id}
                                user={u}
                                followingProgress={followingProgress} 
                                unFollow={unFollow} 
                                follow={follow}/> )       
            }
        </UserContent>
    );
}
export default Users;