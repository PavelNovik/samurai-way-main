import React, {FC} from 'react';
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

import {UsersType} from "../../../redux/state";

type UserPropsType = {
    users: UsersType[]
}
const Users: FC<UserPropsType> = ({users}) => {
    const usersList = users.map((u) => <li key={u.id}><NavLink to={`/dialogs/${u.id}`}
                                                               activeClassName={s.active}>{u.name}</NavLink></li>)

    return (
        <ul className={s.users}>
            {usersList}
        </ul>
    );
};

export default Users;