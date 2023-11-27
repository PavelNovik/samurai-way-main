import {v1} from "uuid";
import pic1 from '../assets/img/pic1.svg'
import pic2 from '../assets/img/pic2.svg'
import pic3 from '../assets/img/pic3.jpg'
import pic4 from '../assets/img/pic4.jpg'

export type UserType = {
    id: string
    avatar: string
    isFollow: boolean
    name: string
    location: {
        country: string
        city: string
    }
    status: string
}
export type UsersStateType = { users: UserType[]}

export type UserReducerActionType = FollowUserACType | UnfollowUserACType | SetUsersAC | ChangeUserStatusAC

const initialState: UsersStateType = {
    users:[]
    // users: [
    //     {
    //         id: v1(),
    //         avatar: pic1,
    //         isFollow: false,
    //         name: 'Dmitry K.',
    //         location: {
    //             country: 'Belarus',
    //             city: 'Minsk',
    //         },
    //         status: 'I am looking for a Job right now...'
    //     },
    //     {
    //         id: v1(),
    //         avatar: pic2,
    //         isFollow: false,
    //         name: 'Svetlana D.',
    //         location: {
    //             country: 'Belarus',
    //             city: 'Minsk',
    //         },
    //         status: 'I am so pretty'
    //     },
    //     {
    //         id: v1(),
    //         avatar: pic3,
    //         isFollow: true,
    //         name: 'Sergei S.',
    //         location: {
    //             country: 'Ukraine',
    //             city: 'Kiev',
    //         },
    //         status: 'I like football!!!'
    //     },
    //     {
    //         id: v1(),
    //         avatar: pic4,
    //         isFollow: true,
    //         name: 'Andrew T.',
    //         location: {
    //             country: 'United States',
    //             city: 'Philadelphia',
    //         },
    //         status: 'I am free to help you to create good Video Production'
    //     }
    // ]
}
export const userReducer = (state = initialState, action: UserReducerActionType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW_USER': {
            return {users: state.users.map(u => u.id === action.userId ? {...u, isFollow: true} : u)}
        }
        case 'UNFOLLOW_USER': {
            return {users: state.users.map(u => u.id === action.userId ? {...u, isFollow: false} : u)}
        }
        case 'SET_USERS': {
            return {users: [...state.users, ...action.users]}
        }
        case 'CHANGE_USER_STATUS': {
            return {users: state.users.map(u => u.id === action.userId ? {...u, isFollow: !u.isFollow} : u)}
        }
        default:
            return state
    }
}

type FollowUserACType = ReturnType<typeof followUserAC>
export const followUserAC = (userId: string) => {
    return {
        type: 'FOLLOW_USER',
        userId
    } as const
}

type UnfollowUserACType = ReturnType<typeof unfollowUserAC>
export const unfollowUserAC = (userId: string) => {
    return {
        type: 'UNFOLLOW_USER',
        userId
    } as const
}

type SetUsersAC = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[])=> {
    return {
        type: 'SET_USERS',
        users
    } as const
}
type ChangeUserStatusAC = ReturnType<typeof changeUserStatusAC>
export const changeUserStatusAC = (userId: string)=> {
    return {
        type: 'CHANGE_USER_STATUS',
        userId
    } as const
}