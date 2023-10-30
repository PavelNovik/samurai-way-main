import React from 'react';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'

import {MessagesPageType} from "../../redux/state";


type DialogPropsType = {
    state: MessagesPageType
    addMessage: ()=> void
    updateNewMessageText: (title: string) => void
}
const Dialogs = (props: DialogPropsType) => {

    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>
            <div className={s.wrapper}>
                <Users users={props.state.users}/>
                <Messages addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} messages={props.state.messages} newMessageValue={props.state.newMessageText}/>
            </div>

        </div>
    );
};

export default Dialogs;