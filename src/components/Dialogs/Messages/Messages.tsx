import React, {FC, useRef} from 'react';
import Message from "./Message/Message";
import s from "./Messages.module.css"

import {
    MessagesPageType,
    StoreActionType,
} from "../../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/messagesReducer";

type MessagesPropsType = {
    state: MessagesPageType
    dispatch: (action: StoreActionType) => void
}
const Messages: FC<MessagesPropsType> = ({state, dispatch}) => {
    const ref = useRef<HTMLTextAreaElement>(null)

    const onChangeHandler = () => {
        // const userInput = ref.current as HTMLTextAreaElement
        // updateNewMessageText(userInput.value)
        const userInput = ref.current?.value
        if (userInput) dispatch(updateNewMessageTextAC(userInput))
    }
    const addNewMessage = () => {
        dispatch(addMessageAC())
    }

    const messagesList = state.messages.map(m => <Message key={m.id} message={m.message} avatar={m.src} isUser={m.isUser}/>)
    return (
        <div className={s.messages}>
            {messagesList}
            <div>
                <textarea onChange={onChangeHandler} ref={ref} value={state.newMessageText} placeholder={'...your message'}/>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    );
};

export default Messages;