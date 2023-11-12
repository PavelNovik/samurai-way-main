import {MessagesPageType, MessagesType, StoreActionType} from "./store";
import {v1} from "uuid";

export const messagesReducer = (state: MessagesPageType, action: StoreActionType): MessagesPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage: MessagesType = {
                id: v1(),
                message: state.newMessageText,
                isUser: true,
                src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
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