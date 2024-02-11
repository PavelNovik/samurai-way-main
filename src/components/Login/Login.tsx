import React from 'react';
import {FormData, LoginReduxForm} from "./LoginForm";
import {LoginProps} from "./LoginContainer";
import {Redirect} from "react-router-dom";

export const Login = (props: LoginProps) => {
    const onSubmit = (data: FormData) => {
        props.loginUserTC(data)
    }

    if(props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm captchaUrl={props.captcha} onSubmit={onSubmit}/>

        </div>
    );
};

