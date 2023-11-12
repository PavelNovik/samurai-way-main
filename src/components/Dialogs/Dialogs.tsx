import React from 'react';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'

import {MessagesPageType, StoreActionType, StoreType} from "../../redux/store";
import MessagesContainer from "./Messages/MessagesContainer";


type DialogPropsType = {
   store: StoreType
}
const Dialogs = (props: DialogPropsType) => {
    const state = props.store.getState().messagesPage

    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>
            <div className={s.wrapper}>
                <Users users={state.users}/>
                <MessagesContainer store={props.store}/>
            </div>

        </div>
    );
};

export default Dialogs;