import React from 'react';
import Message from "./Message/Message";
import s from "./Messages.module.css"

const Messages = () => {
    return (
        <div className={s.messages}>
            <Message/>
            <Message/>
            <Message/>
        </div>
    );
};

export default Messages;