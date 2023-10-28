import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
export type UsersType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
    src: string
}
export type PostsType = {
    id: number
    message: string
    likes: number
}
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
    {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur eius inventore laborum nemo rem? Ab a provident?', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9q3EiN3joifQUrBIB1o9XZD66BkxVYl7lL-Y4UjSc0FhDLc2iAv1yHxplb0Mw8FcBrHw&usqp=CAU'},
    {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit laborum nemo rem? Ab a provident?', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9q3EiN3joifQUrBIB1o9XZD66BkxVYl7lL-Y4UjSc0FhDLc2iAv1yHxplb0Mw8FcBrHw&usqp=CAU'},
    {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur eius inventore laborum nemo rem? Ab a provident?', src: 'https://as1.ftcdn.net/v2/jpg/01/20/57/42/1000_F_120574212_GvxCtULmstescUI0vehjptnhEphRuRW1.jpg'},
    {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quibusdam!', src: 'https://as1.ftcdn.net/v2/jpg/01/20/57/42/1000_F_120574212_GvxCtULmstescUI0vehjptnhEphRuRW1.jpg'},
]
const posts: PostsType[] = [
    {id: 1, message: "Hello) How are you?", likes: 13},
    {id: 2, message: "It's my first Post)", likes: 11},
    {id: 3, message: "It's my second Post)", likes: 3},
]
ReactDOM.render(
    <App users={users} messages={messages} posts={posts}/>,
  document.getElementById('root')
);