import React, {FC} from 'react';
import s from "./Message.module.css"

type MessagePropsType = {
    message: string
    avatar: string
}
const Message: FC<MessagePropsType> = ({message, avatar}) => {
    return (
        <div className={s.message}>
            <img alt={'avatar'}
                 src={avatar}/>
            <span>{message}</span>
        </div>
    );
};

export default Message;