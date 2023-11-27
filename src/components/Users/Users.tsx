import React, {FC, memo} from 'react';
import s from './Users.module.css'
import {UsersPagePropsType} from "./UsersPageContainer";
import {v1} from "uuid";
import pic1 from "../../assets/img/pic1.svg";
import pic2 from "../../assets/img/pic2.svg";
import pic3 from "../../assets/img/pic3.jpg";
import pic4 from "../../assets/img/pic4.jpg";

export const Users: FC<UsersPagePropsType> = (props) => {

    if (props.users.length === 0) props.setUsers([
        {
            id: v1(),
            avatar: pic1,
            isFollow: false,
            name: 'Dmitry K.',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
            status: 'I am looking for a Job right now...'
        },
        {
            id: v1(),
            avatar: pic2,
            isFollow: false,
            name: 'Svetlana D.',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
            status: 'I am so pretty'
        },
        {
            id: v1(),
            avatar: pic3,
            isFollow: true,
            name: 'Sergei S.',
            location: {
                country: 'Ukraine',
                city: 'Kiev',
            },
            status: 'I like football!!!'
        },
        {
            id: v1(),
            avatar: pic4,
            isFollow: true,
            name: 'Andrew T.',
            location: {
                country: 'United States',
                city: 'Philadelphia',
            },
            status: 'I am free to help you to create good Video Production'
        }
    ])

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
                                <img src={u.avatar} alt="avatara"/>
                                <button onClick={onClickHandler}>{u.isFollow ? 'Unfollow' : 'Follow'}</button>
                            </div>
                            <div className={s.userInfo}>
                                <div className={s.userName}>
                                    <span>{u.name}</span>
                                    <span>{u.status}</span>
                                </div>
                                <div className={s.userLocation}>
                                    <span>{u.location.country},</span>
                                    <span>{u.location.city}</span>
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
};

