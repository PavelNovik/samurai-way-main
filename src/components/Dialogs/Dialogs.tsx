import React from 'react';
import s from './Dialogs.module.css'
// import {StoreType} from "../../redux/store";

import UsersContainer from "./Users/UsersContainer";
import MessagesContainer from "./Messages/MessagesContainer";


// type DialogPropsType = {
//     // store: StoreType
// }
const Dialogs = () => {
    // const state = props.store.getState().messagesPage

    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>
            <div className={s.wrapper}>
                <UsersContainer
                    // store={props.store}
                />
                <MessagesContainer
                    // store={props.store}
                />
            </div>

        </div>
    );
};

export default Dialogs;