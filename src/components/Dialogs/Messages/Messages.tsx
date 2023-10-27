import React, {FC} from 'react';
import Message from "./Message/Message";
import s from "./Messages.module.css"
import {MessagesType} from "../Dialogs";

type MessagesPropsType = {
    messages: MessagesType[]
}
const Messages: FC<MessagesPropsType> = ({messages}) => {
    return (
        <div className={s.messages}>
            {messages.map(m => <Message key={m.id} message={m.message} avatar={m.src}/>)}

        </div>
    );
};

export default Messages;