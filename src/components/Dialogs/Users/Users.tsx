import React from 'react';
import s from './Users.module.css'

const Users = () => {
    return (
        <ul className={s.users}>
            <li><a href={"#"}>Andrew</a></li>
            <li><a href={"#"}>Dmitry</a></li>
            <li><a href={"#"}>Sasha</a></li>
            <li><a href={"#"}>Sveta</a></li>
        </ul>
    );
};

export default Users;