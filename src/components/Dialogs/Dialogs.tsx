import React from 'react';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'

import {MessagesPageType, StoreActionType} from "../../redux/store";


type DialogPropsType = {
    state: MessagesPageType
    dispatch: (action: StoreActionType) => void
}
const Dialogs = (props: DialogPropsType) => {

    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>
            <div className={s.wrapper}>
                <Users users={props.state.users}/>
                <Messages dispatch={props.dispatch} state={props.state}/>
            </div>

        </div>
    );
};

export default Dialogs;