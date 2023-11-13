import React, {FC, useRef} from 'react';
import Message from "./Message/Message";
import s from "./Messages.module.css"
import {MessagesPropsType} from "./MessagesContainer";
// import {MessagesType} from "../../../redux/messagesReducer";


// type MessagesPropsType = {
//     messages: MessagesType[]
//     newMessageText: string
//     updateNewMessageText: (text: string) => void
//     addNewMessage: () => void
// }
const Messages: FC<MessagesPropsType> = (props) => {
    const ref = useRef<HTMLTextAreaElement>(null)

    const onChangeHandler = () => {
        const userInput = ref.current?.value
        props.updateNewMessageText(userInput ? userInput : '')

    }
    const addNewMessage = () => {
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