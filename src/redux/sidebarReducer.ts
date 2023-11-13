import {StoreActionType} from "./store";
import {v1} from "uuid";
import {UsersType} from "./messagesReducer";

export type SidebarMenuType = {
    id: string
    title: string
    path: string
}


export type SidebarType = {
    menu: SidebarMenuType[]
    friends: UsersType[]
}

const initialState: SidebarType={
    menu: [
        {id: v1(), title: 'Profile', path: '/profile'},
        {id: v1(), title: 'Messages', path: '/dialogs'},
        {id: v1(), title: 'News', path: '/news'},
        {id: v1(), title: 'Music', path: '/music'},
        {id: v1(), title: 'Settings', path: '/settings'},
    ],
    friends: [
        {
            id: 1,
            name: 'Andrew',
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3jjKg5GHVT7UFqTMbGFDYgNHkdjn1KWjncYzUVO452vdH4TswaAcfwWOfLZgevshtN8&usqp=CAU"
        },
        {
            id: 2, name: 'Dmitry', avatar: "https://oceanballoons.ru/content/photo/full/201804181640451.jpg"
        },
        {
            id: 3,
            name: 'Sasha',
            avatar: "https://i.pinimg.com/originals/f3/af/3a/f3af3ab02e4ea2074d74c48770ed6784.png"
        },
    ]
}
export const sidebarReducer = (state: SidebarType = initialState, action: StoreActionType): SidebarType => {
    switch (action.type) {

        default:
            return state
    }
}