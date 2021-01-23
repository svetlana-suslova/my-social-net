import React from 'react';
import User from './User';
import styled from 'styled-components';

const UserContent = styled.div`
    background: #ffffff;
    line-height: 25px;
    padding: 15px;
    margin-left: 130px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Users = ( {users, followingProgress, unFollow, follow} ) => {
    
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