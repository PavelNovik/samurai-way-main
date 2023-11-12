import React, {FC} from 'react';
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

import {UsersType} from "../../../redux/store";

type UserPropsType = {
    users: UsersType[]
}
const Users: FC<UserPropsType> = ({users}) => {
    const usersList = users.map((u) => <li key={u.id}><img src={u.avatar} alt={'userAvatar'}/><NavLink to={`/dialogs/${u.id}`}
                                                               activeClassName={s.active}>{u.name}</NavLink></li>)

    return (
        <ul className={s.users}>
            {usersList}
        </ul>
    );
};

export default Users;