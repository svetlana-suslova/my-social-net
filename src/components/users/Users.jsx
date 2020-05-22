import React from 'react';
import s from './Users.module.sass';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png';

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {  
                props.setUsers(response.data.items)
            });
        }
    }    

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div className={s.userPhoto}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Avatar"/>
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