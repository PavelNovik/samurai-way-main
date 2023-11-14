import {v1} from "uuid";
import pic1 from '../assets/img/pic1.svg'
import pic2 from '../assets/img/pic2.svg'
import pic3 from '../assets/img/pic3.jpg'
import pic4 from '../assets/img/pic4.jpg'
import pic5 from '../assets/img/pic5.jpg'
import pic6 from '../assets/img/pic6.jpg'
import pic7 from '../assets/img/pic7.svg'

export type UsersType = {
    id: number
    name: string
    avatar: string
}
export type MessagesType = {
    id: string
    message: string
    src: string
    isUser: boolean
}
export type MessagesPageType = {
    users: UsersType[]
    messages: MessagesType[]
    newMessageText: string

}

const initialState: MessagesPageType = {
    users: [
        {id: 1, name: 'Andrew', avatar: pic1},
        {id: 2, name: 'Dmitry', avatar: pic2},
        {id: 3, name: 'Sasha', avatar: pic3},
        {id: 4, name: 'Sveta', avatar: pic4},
        {id: 5, name: 'Viktor', avatar: pic5},
        {id: 6, name: 'Valera', avatar: pic7}
    ],
    messages: [
        {
            id: v1(),
            isUser: true,
            message: 'Hello) How are you?',
            src: pic6
        },
        {
            id: v1(),
            isUser: false,
            message: 'I\'m fine) Thank you! What\'s up man?',
            src: pic3
        },
        {
            id: v1(),
            isUser: true,
            message: 'All right!',
            src: pic6
        },

    ],
    newMessageText: 'new message text'
}

export const messagesReducer = (state: MessagesPageType = initialState, action: MessagesActionType): MessagesPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage: MessagesType = {
                id: v1(),
                message: state.newMessageText,
                isUser: true,
                src: pic6
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        case 'UPDATE-MESSAGE': {
            const newMessage = action.payload.message
            return {...state, newMessageText: newMessage}
        }
        default:
            return state
    }
}

export type MessagesActionType = AddMessageACType | UpdateNewMessageTextACType

type AddMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE",
        payload: {}
    } as const
}

type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (message: string) => {
    return {
        type: "UPDATE-MESSAGE",
        payload: {
            message: message
        }
    } as const
}