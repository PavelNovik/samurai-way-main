import React, {FC, useRef} from 'react';
import Message from "./Message/Message";
import s from "./Messages.module.css"

import {MessagesType} from "../../../redux/state";

type MessagesPropsType = {
    messages: MessagesType[]
    newMessageValue: string
    addMessage: () => void
    updateNewMessageText: (title: string) => void
}
const Messages: FC<MessagesPropsType> = ({messages, newMessageValue, addMessage, updateNewMessageText}) => {
    const ref = useRef<HTMLTextAreaElement>(null)

    const onChangeHandler = () => {
        const userInput = ref.current as HTMLTextAreaElement
        updateNewMessageText(userInput.value)
    }
    const addNewMessage = () => {
        addMessage()
    }

    const messagesList = messages.map(m => <Message key={m.id} message={m.message} avatar={m.src} isUser={m.isUser}/>)
    return (
        <div className={s.messages}>
            {messagesList}
            <div>
                <textarea onChange={onChangeHandler} ref={ref} value={newMessageValue} placeholder={'...your message'}/>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    );
};

export default Messages;