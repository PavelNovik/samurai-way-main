import React from 'react';
import {LoginReduxForm} from "./LoginForm";

export const Login = () => {
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    );
};

