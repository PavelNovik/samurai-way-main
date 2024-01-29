import React from 'react';
import {FormData, LoginReduxForm} from "./LoginForm";

export const Login = () => {
    const onSubmit = (data: FormData) => {
        console.log(data)
    }
    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    );
};

