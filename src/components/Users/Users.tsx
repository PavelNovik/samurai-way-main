import React, {FC} from 'react';
import s from './Users.module.css'
import {UsersPagePropsType} from "./UsersPageContainer";

export const Users: FC<UsersPagePropsType> = (props) => {
    const users = props.users.map(u => <div>{u.name + u.location.country + u.location.city}</div>)

    return (
        <div className={s.users}>
            <h2>Users</h2>
            <div className="">
                {users}

            </div>
        </div>
    );
};

