import React, {FC} from 'react';
import s from "./Message.module.css"

type MessagePropsType = {
    message: string
    avatar: string
    isUser: boolean
}
const Message: FC<MessagePropsType> = ({message, avatar, isUser}) => {
    return (
        <div className={isUser ? s.message : s.message + ' ' + s.friend}>
            <img alt={'avatar'}
                 src={avatar}/>
            <div>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Message;