import React, {FC, useRef} from 'react';
import Message from "./Message/Message";
import s from "./Messages.module.css"
import {MessagesPropsType} from "./MessagesContainer";
import {Redirect} from "react-router-dom";
import {MessageDataT, MessageReduxForm} from "./MessageForm";

const Messages: FC<MessagesPropsType> = (props) => {
    const ref = useRef<HTMLTextAreaElement>(null)

    const addNewMessage = (data: MessageDataT) => {
        console.log(data)
        props.addNewMessage(data.message)
    }

    const messagesList = props.messages.map(m => <Message key={m.id} message={m.message} avatar={m.src}
                                                          isUser={m.isUser}/>)

    // if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.messages}>
            {messagesList}
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
};

export default Messages;