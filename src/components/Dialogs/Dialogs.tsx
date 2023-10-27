import React from 'react';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'

export type UsersType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
    src: string
}
const Dialogs = () => {

    const users: UsersType[] = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
    const messages: MessagesType[] = [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur eius inventore laborum nemo rem? Ab aliquid dolorem et provident?', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9q3EiN3joifQUrBIB1o9XZD66BkxVYl7lL-Y4UjSc0FhDLc2iAv1yHxplb0Mw8FcBrHw&usqp=CAU'},
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur eius inventore laborum nemo rem? Ab a provident?', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9q3EiN3joifQUrBIB1o9XZD66BkxVYl7lL-Y4UjSc0FhDLc2iAv1yHxplb0Mw8FcBrHw&usqp=CAU'},
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit laborum nemo rem? Ab a provident?', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9q3EiN3joifQUrBIB1o9XZD66BkxVYl7lL-Y4UjSc0FhDLc2iAv1yHxplb0Mw8FcBrHw&usqp=CAU'},
        {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur eius inventore laborum nemo rem? Ab a provident?', src: 'https://as1.ftcdn.net/v2/jpg/01/20/57/42/1000_F_120574212_GvxCtULmstescUI0vehjptnhEphRuRW1.jpg'},
        {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quibusdam!', src: 'https://as1.ftcdn.net/v2/jpg/01/20/57/42/1000_F_120574212_GvxCtULmstescUI0vehjptnhEphRuRW1.jpg'},
    ]

    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>
            <div className={s.wrapper}>
                <Users users={users}/>
                <Messages messages={messages}/>
            </div>

        </div>
    );
};

export default Dialogs;