import React from 'react';
import s from "./Users.module.css";
import pic4 from "../../assets/img/pic4.jpg";
import axios from "axios";
import {UsersPagePropsType} from "./UsersPageContainer";

export class UsersClass extends React.Component<UsersPagePropsType> {
    constructor(props: UsersPagePropsType) {
        super(props);

        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => this.props.setUsers(res.data.items))
        }
    }


    // getUsers = () => {
    //
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => this.props.setUsers(res.data.items))
    //     }
    // }

    render() {
        // const users = this.props.users

        return (
            <div className={s.users}>
                <h2>Users</h2>
                {/*<button onClick={this.getUsers}>get users</button>*/}
                <div className={s.usersContainer}>
                    {this.props.users.map(u => {
                        const onClickHandler = () => {
                            this.props.changeUserStatus(u.id)
                        }
                        return (
                            <div key={u.id} className={s.user}>
                                <div className={s.userAction}>
                                    <img src={u.photos.small ? u.photos.small : pic4} alt="avatara"/>
                                    <button onClick={onClickHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                                </div>
                                <div className={s.userInfo}>
                                    <div className={s.userName}>
                                        <span>{u.name}</span>
                                        <span>{u.status}</span>
                                    </div>
                                    <div className={s.userLocation}>
                                        <span>{u.location ? u.location.country : 'Bel'},</span>
                                        <span>{u.location ? u.location.city : 'Sluck'}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={s.usersAction}>
                    <button>Show more</button>
                </div>
            </div>
        );
    }
}

