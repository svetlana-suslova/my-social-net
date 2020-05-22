import React, {Component} from 'react';
import s from './Users.module.sass';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png';

export default class Users extends Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {  
                this.props.setUsers(response.data.items)
            });
    }
    
    render() {
        return (
            <div>
                {
                    this.props.users.map( u => <div key={u.id}>
                        <span>
                            <div className={s.userPhoto}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Avatar"/>
                            </div>
                            <div>
                                {
                                    u.followed 
                                    ? <button onClick={ () => { this.props.unFollowUser(u.id) } }>Unfollow</button> 
                                    : <button onClick={ () => { this.props.followUser(u.id) } }>Follow</button>
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
}