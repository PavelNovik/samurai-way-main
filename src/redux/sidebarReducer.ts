import {StoreActionType} from "./store";
import {v1} from "uuid";
import {UsersType} from "./messagesReducer";
import pic1 from '../assets/img/pic1.svg'
import pic2 from '../assets/img/pic2.svg'
import pic3 from '../assets/img/pic3.jpg'

export type SidebarMenuType = {
    id: string
    title: string
    path: string
}


export type SidebarType = {
    menu: SidebarMenuType[]
    friends: UsersType[]
}

const initialState: SidebarType = {
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
            avatar: pic1
        },
        {
            id: 2, name: 'Dmitry', avatar: pic2
        },
        {
            id: 3,
            name: 'Sasha',
            avatar: pic3
        },
    ]
}
export const sidebarReducer = (state: SidebarType = initialState, action: StoreActionType): SidebarType => {
    switch (action.type) {

        default:
            return state
    }
}