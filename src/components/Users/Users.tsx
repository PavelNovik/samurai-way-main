import React, {useEffect} from 'react';
import s from './Users.module.css'
import {UsersPagePropsType} from "./UsersPageContainer";
// import {v1} from "uuid";
// import pic1 from "../../assets/img/pic1.svg";
// import pic2 from "../../assets/img/pic2.svg";
// import pic3 from "../../assets/img/pic3.jpg";
import pic4 from "../../assets/img/pic4.jpg";
import axios from "axios";

export function Users(props: UsersPagePropsType) {

    useEffect(() => {
        // if (props.users.length === 0) {
        //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => props.setUsers(res.data.items))
        //
        // }
    }, [props]);

    const users = props.users


    return (
        <div className={s.users}>
            <h2>Users</h2>
            <div className={s.usersContainer}>
                {users.map(u => {
                    const onClickHandler = () => {
                        props.changeUserStatus(u.id)
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