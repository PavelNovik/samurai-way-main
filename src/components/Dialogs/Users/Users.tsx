import React from 'react';
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

const Users = () => {
    return (
        <ul className={s.users}>
            <li><NavLink to={"/dialogs/1"} activeClassName={s.active}>Andrew</NavLink></li>
            <li><NavLink to={"/dialogs/2"} activeClassName={s.active}>Dmitry</NavLink></li>
            <li><NavLink to={"/dialogs/3"} activeClassName={s.active}>Sasha</NavLink></li>
            <li><NavLink to={"/dialogs/4"} activeClassName={s.active}>Sveta</NavLink></li>
        </ul>
    );
};

export default Users;