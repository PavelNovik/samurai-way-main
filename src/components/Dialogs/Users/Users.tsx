import React, {FC} from 'react';
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {UsersType} from "../Dialogs";

type UserPropsType = {
    users: UsersType[]
}
const Users: FC<UserPropsType> = ({users}) => {


    return (
        <ul className={s.users}>
            {users.map((u) => {
                return (
                    <li key={u.id}><NavLink to={`/dialogs/${u.id}`} activeClassName={s.active}>{u.name}</NavLink></li>
                )
            })}
        </ul>
    );
};

export default Users;