import React from 'react';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'

import {MessagesType, UsersType} from "../../redux/state";


type DialogPropsType = {
    users: UsersType[]
    messages: MessagesType[]
}
const Dialogs = (props: DialogPropsType) => {

    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>
            <div className={s.wrapper}>
                <Users users={props.users}/>
                <Messages messages={props.messages}/>
            </div>

        </div>
    );
};

export default Dialogs;