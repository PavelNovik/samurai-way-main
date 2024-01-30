import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AuthReducerStateType} from "../../redux/auth-reducer";


type HeaderProps = {
    logout: ()=> void
}
export const Header = (props: AuthReducerStateType & HeaderProps) => {

    // console.log(props.email, props.id, props.login)

    const loginBar = <div>
        <div>{props.login}</div>
        <div><button onClick={props.logout}>Logout</button></div>
    </div>
    return (
        <header className={classes.header}>
            <img
                src={'https://images.vexels.com/media/users/3/224169/isolated/lists/dbfe1f493ad01117fa4ec5ba10150e4d-computer-programming-logo.png'}/>
            <div className={classes.loginBlock}>
                {!props.isAuth ? <NavLink to={'/login'}>Login</NavLink>: loginBar}
            </div>
        </header>
    );
};

