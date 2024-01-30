// import pic1 from '../assets/img/pic1.svg'
// import pic2 from '../assets/img/pic2.svg'
// import pic3 from '../assets/img/pic3.jpg'
// import pic4 from '../assets/img/pic4.jpg'
import {Dispatch} from "redux";
import {usersAPI} from "../api/user-api";

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
    followingInProgress: Array<number | string>
}

export type UserReducerActionType =
    FollowUserACType
    | UnfollowUserACType
    | SetUsersAC
    | ChangeUserStatusAC
    | ChangeCurrentPageAC
    | SetTotalUserCountAC
    | ChangeIsFetchingAC | ToggleIsFollowingProgress

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

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
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFollowingProgress ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}

type FollowUserACType = ReturnType<typeof followUser>
export const followUser = (userId: string | number) => {
    return {
        type: 'FOLLOW_USER',
        userId
    } as const
}

type UnfollowUserACType = ReturnType<typeof unfollowUser>
export const unfollowUser = (userId: string | number) => {
    return {
        type: 'UNFOLLOW_USER',
        userId
    } as const
}

type SetUsersAC = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
type ChangeUserStatusAC = ReturnType<typeof changeUserStatus>
export const changeUserStatus = (userId: string | number) => {
    return {
        type: 'CHANGE_USER_STATUS',
        userId
    } as const
}

type ChangeCurrentPageAC = ReturnType<typeof changeCurrentPage>

export const changeCurrentPage = (page: number) => {
    return {
        type: 'CHANGE_CURRENT_PAGE',
        currentPage: page
    } as const
}

type SetTotalUserCountAC = ReturnType<typeof setTotalUserCount>

export const setTotalUserCount = (userCount: number) => {
    return {
        type: 'SET_TOTAL_USER_COUNT',
        userCount
    } as const
}

type ChangeIsFetchingAC = ReturnType<typeof changeIsFetching>

export const changeIsFetching = (isFetching: boolean) => {
    return {
        type: 'CHANGE_IS_FETCHING',
        isFetching
    } as const
}

type ToggleIsFollowingProgress = ReturnType<typeof toggleIsFollowingProgress>
export const toggleIsFollowingProgress = (isFollowingProgress: boolean, id: string | number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFollowingProgress,
        id
    } as const
}

export const getUsersTC = (currentPage: number, pageSize: number) =>(dispatch: Dispatch) => {
    dispatch(changeIsFetching(true))
    dispatch(changeCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(changeIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
}
export const changePageTC = (page: number, pageSize: number) =>(dispatch: Dispatch) => {
    dispatch(changeIsFetching(true))
    dispatch(changeCurrentPage(page))
    usersAPI.getUsers(page, pageSize)
        .then(data => {
            dispatch(changeIsFetching(false))
            dispatch(setUsers(data.items))
        })
}
export const followUserTC = (userId: number | string) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.follow(userId).then(data => {
        console.log(data)
        if (data.resultCode === 0) {
            dispatch(followUser(userId))
        }
    }).catch(e => {
        console.log(e)
    }).finally(() => {
        dispatch(toggleIsFollowingProgress(false, userId))
    })
}

export const unfollowUserTC = (userId: number | string) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.unfollow(userId).then(data => {
        console.log(data)
        if (data.resultCode === 0) {
            dispatch(unfollowUser(userId))
        }
    }).catch(e => {
        console.log(e)
    }).finally(() => dispatch(toggleIsFollowingProgress(false,userId)))
}