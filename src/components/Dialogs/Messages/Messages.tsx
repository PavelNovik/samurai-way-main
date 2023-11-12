import React, {FC, useRef} from 'react';
import Message from "./Message/Message";
import s from "./Messages.module.css"

import {MessagesType} from "../../../redux/store";

type MessagesPropsType = {
    // state: MessagesPageType
    // dispatch: (action: StoreActionType) => void
    messages: MessagesType[]
    newMessageText: string
    updateNewMessageText: (text: string) => void
    addNewMessage: () => void
}
const Messages: FC<MessagesPropsType> = (props) => {
    const ref = useRef<HTMLTextAreaElement>(null)

    const onChangeHandler = () => {
        // const userInput = ref.current as HTMLTextAreaElement
        // updateNewMessageText(userInput.value)
        const userInput = ref.current?.value
        // if (userInput) dispatch(updateNewMessageTextAC(userInput))
        props.updateNewMessageText(userInput ? userInput : '')

    }
    const addNewMessage = () => {
        // dispatch(addMessageAC())
        props.addNewMessage()
    }

    const messagesList = props.messages.map(m => <Message key={m.id} message={m.message} avatar={m.src}
                                                          isUser={m.isUser}/>)
    return (
        <div className={s.messages}>
            {messagesList}
            <div>
                <textarea onChange={onChangeHandler} ref={ref} value={props.newMessageText}
                          placeholder={'...your message'}/>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    );
};

export default Messages;