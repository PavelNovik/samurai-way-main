import React from 'react';
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

const Users = () => {
    const users = ['Andrew', 'Dmitry', 'Sasha', 'Sveta', 'Viktor', 'Valera']

    return (
        <ul className={s.users}>
            {users.map((u, i) => {
                return (
                    <li key={i}><NavLink to={`/dialogs/${i + 1}`} activeClassName={s.active}>{u}</NavLink></li>
                )
            })}
        </ul>
    );
};

export default Users;