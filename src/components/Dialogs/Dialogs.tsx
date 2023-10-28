import React from 'react';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'

import {MessagesPageType} from "../../redux/state";


type DialogPropsType = {
    state: MessagesPageType
}
const Dialogs = (props: DialogPropsType) => {

    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>
            <div className={s.wrapper}>
                <Users users={props.state.users}/>
                <Messages messages={props.state.messages}/>
            </div>

        </div>
    );
};

export default Dialogs;