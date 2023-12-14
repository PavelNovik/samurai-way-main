import {v1} from "uuid";
import pic1 from '../assets/img/pic1.svg'
import pic2 from '../assets/img/pic2.svg'
import pic3 from '../assets/img/pic3.jpg'
import pic4 from '../assets/img/pic4.jpg'

export type UserType = {
    id: string | number
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    name: string
    location?: {
        country: string
        city: string
    }
    uniqueUrlName: null
    status: string | null
}
export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type UserReducerActionType =
    FollowUserACType
    | UnfollowUserACType
    | SetUsersAC
    | ChangeUserStatusAC
    | ChangeCurrentPageAC
    | SetTotalUserCountAC
    | ChangeIsFetchingAC

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW_USER': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case 'SET_USERS': {
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: action.users}
        }
        case 'CHANGE_USER_STATUS': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}
        }
        case 'CHANGE_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USER_COUNT': {
            return {...state, totalUsersCount: action.userCount}
        }
        case 'CHANGE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

type FollowUserACType = ReturnType<typeof followUserAC>
export const followUserAC = (userId: string | number) => {
    return {
        type: 'FOLLOW_USER',
        userId
    } as const
}

type UnfollowUserACType = ReturnType<typeof unfollowUserAC>
export const unfollowUserAC = (userId: string | number) => {
    return {
        type: 'UNFOLLOW_USER',
        userId
    } as const
}

type SetUsersAC = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
type ChangeUserStatusAC = ReturnType<typeof changeUserStatusAC>
export const changeUserStatusAC = (userId: string | number) => {
    return {
        type: 'CHANGE_USER_STATUS',
        userId
    } as const
}

type ChangeCurrentPageAC = ReturnType<typeof changeCurrentPageAC>

export const changeCurrentPageAC = (page: number) => {
    return {
        type: 'CHANGE_CURRENT_PAGE',
        currentPage: page
    } as const
}

type SetTotalUserCountAC = ReturnType<typeof setTotalUserCountAC>

export const setTotalUserCountAC = (userCount: number) => {
    return {
        type: 'SET_TOTAL_USER_COUNT',
        userCount
    } as const
}

type ChangeIsFetchingAC = ReturnType<typeof changeIsFetchingAC>

export const changeIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'CHANGE_IS_FETCHING',
        isFetching
    } as const
}