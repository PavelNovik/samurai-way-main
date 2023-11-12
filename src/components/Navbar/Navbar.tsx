import React, {FC} from 'react';
import S from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/store";
import Users from "../Dialogs/Users/Users";

type NavbarPropsType = {
    state: SidebarType
}

const Navbar: FC<NavbarPropsType> = ({state}) => {
    const menuItems = state.menu.map(mi => <div key={mi.id} className={S.item}>
        <NavLink to={mi.path} activeClassName={S.active}>{mi.title}</NavLink>
    </div>)


    return (
        <nav className={S.nav}>
            {menuItems}
            <Users users={state.friends}/>
        </nav>
    );
};

export default Navbar;