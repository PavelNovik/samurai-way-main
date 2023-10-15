import React from 'react';
import S from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={S.nav}>
            <div className={S.item}><NavLink to={'/profile'} activeClassName={S.active}>Profile</NavLink></div>
            <div className={S.item}><NavLink to={'/dialogs'} activeClassName={S.active}>Messages</NavLink></div>
            <div className={S.item}><NavLink to={'/news'} activeClassName={S.active}>News</NavLink></div>
            <div className={S.item}><NavLink to={'/music'} activeClassName={S.active}>Music</NavLink></div>
            <div className={S.item}><NavLink to={'/settings'} activeClassName={S.active}>Settings</NavLink></div>
        </nav>
    );
};

export default Navbar;