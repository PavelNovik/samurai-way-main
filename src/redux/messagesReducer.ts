import {v1} from "uuid";

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

const initialState: MessagesPageType={
    users: [
        {
            id: 1,
            name: 'Andrew',
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3jjKg5GHVT7UFqTMbGFDYgNHkdjn1KWjncYzUVO452vdH4TswaAcfwWOfLZgevshtN8&usqp=CAU"
        },
        {id: 2, name: 'Dmitry', avatar: "https://oceanballoons.ru/content/photo/full/201804181640451.jpg"},
        {
            id: 3,
            name: 'Sasha',
            avatar: "https://i.pinimg.com/originals/f3/af/3a/f3af3ab02e4ea2074d74c48770ed6784.png"
        },
        {
            id: 4,
            name: 'Sveta',
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhB7DwE6k6D4CyKJdRJsq8YPjD7ebmtENAaBwU9XZlNbK0eVq6tyUoBdN1Jg9bhq3Eak&usqp=CAU"
        },
        {
            id: 5,
            name: 'Viktor',
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCY_5-tzmuXbYnkbG9AGETzobPZjJcOwlhX4-K-5iiC1YteCANzrHeP3cqggtFnTqsg0&usqp=CAU"
        },
        {
            id: 6,
            name: 'Valera',
            avatar: "https://i.pinimg.com/236x/19/25/55/192555b6de984067f092206708913632.jpg"
        }
    ],
    messages: [
        {
            id: v1(),
            isUser: true,
            message: 'Hello) How are you?',
            src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
        },
        {
            id: v1(),
            isUser: false,
            message: 'I\'m fine) Thank you! What\'s up man?',
            src: 'https://as1.ftcdn.net/v2/jpg/01/20/57/42/1000_F_120574212_GvxCtULmstescUI0vehjptnhEphRuRW1.jpg'
        },
        {
            id: v1(),
            isUser: true,
            message: 'All right!',
            src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
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