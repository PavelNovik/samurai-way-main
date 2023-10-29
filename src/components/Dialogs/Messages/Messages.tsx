import React, {FC, useRef} from 'react';
import Message from "./Message/Message";
import s from "./Messages.module.css"

import {MessagesType} from "../../../redux/state";

type MessagesPropsType = {
    messages: MessagesType[]
}
const Messages: FC<MessagesPropsType> = ({messages}) => {
    const ref = useRef<HTMLTextAreaElement>(null)
    const userInput = ref.current as HTMLTextAreaElement

    const addMessage = () => {
        console.log(userInput.value)
    }

    const messagesList = messages.map(m => <Message key={m.id} message={m.message} avatar={m.src} isUser={m.isUser}/>)
    return (
        <div className={s.messages}>
            {messagesList}
            <div>
                <textarea ref={ref} placeholder={'...your message'}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
};

export default Messages;