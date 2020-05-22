import React from 'react';
import s from './Users.module.sass';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://cdn130.picsart.com/75221377491263861300.png', followed: true, fullName: 'Sveta Suslova', status: 'Hi there!', location: {city: 'Krakow', country: 'Poland'} },
            {id: 2, photoUrl: 'https://cdn130.picsart.com/75221377491263861300.png', followed: true, fullName: 'Marta K', status: 'Lol))', location: {city: 'Kiev', country: 'Ukraine'} },
            {id: 3, photoUrl: 'https://cdn130.picsart.com/75221377491263861300.png', followed: false, fullName: 'Keith Gloria', status: 'Aloha!', location: {city: 'Barcelona', country: 'Spain'} },
            {id: 4, photoUrl: 'https://cdn130.picsart.com/75221377491263861300.png', followed: false, fullName: 'Sven Peterson', status: 'Busy bee', location: {city: 'Kopengagen', country: 'Denmark'} }
        ]);
    }

    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div className={s.userPhoto}>
                            <img src={u.photoUrl} alt="Avatar"/>
                        </div>
                        <div>
                            {
                                u.followed 
                                ? <button onClick={ () => { props.unFollowUser(u.id) } }>Unfollow</button> 
                                : <button onClick={ () => { props.followUser(u.id) } }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>  
                </div>)
            }
        </div>
    );
}
export default Users;