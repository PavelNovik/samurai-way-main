import React from 'react';
import s from './Dialogs.module.css'
import UsersContainer from "./Users/UsersContainer";
import MessagesContainer from "./Messages/MessagesContainer";


const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.wrapper}>
                <UsersContainer/>
                <MessagesContainer/>
            </div>

        </div>
    );
};

export default Dialogs;