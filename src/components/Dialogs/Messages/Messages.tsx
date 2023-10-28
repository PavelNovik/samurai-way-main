import React, {FC} from 'react';
import Message from "./Message/Message";
import s from "./Messages.module.css"

import {MessagesType} from "../../../redux/state";

type MessagesPropsType = {
    messages: MessagesType[]
}
const Messages: FC<MessagesPropsType> = ({messages}) => {

    const messagesList = messages.map(m => <Message key={m.id} message={m.message} avatar={m.src} isUser={m.isUser}/>)
    return (
        <div className={s.messages}>
            {messagesList}

        </div>
    );
};

export default Messages;