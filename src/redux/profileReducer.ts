import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/profile-api";

export type PostsType = {
    id: string
    message: string
    likes: number
}
export type ProfilePageType = {
    posts: PostsType[]
    profile: ProfileType | null
    status: string
}

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hello) How are you?", likes: 13},
        {id: v1(), message: "It's my first Post)", likes: 11},
        {id: v1(), message: "It's my second Post)", likes: 3},
    ],
    profile: null,
    status: 'No status'
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: v1(),
                message: action.post,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(p=> p.id !== action.id)}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-PROFILE-STATUS": {
            return {...state, status: action.status}
        }

        default:
            return state
    }
}

export type ProfileActionType = AddPostACType | SetUserProfileType | SetProfileStatus | DeletePostAC

type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (post: string) => {
    return {
        type: "ADD-POST",
        post
    } as const
}

type DeletePostAC = ReturnType<typeof deletePostAC>
export const deletePostAC = (id: string | number) => {
    return {
        type: 'DELETE-POST',
        id
    } as const
}

export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}


export type SetProfileStatus = ReturnType<typeof setProfileStatus>
export const setProfileStatus = (status: string) => {
    return {
        type: 'SET-PROFILE-STATUS',
        status
    } as const
}

export const setUserProfileTC = (userId: string | number) => (dispatch: Dispatch) => {
    profileAPI.getProfileUsers(userId).then(data => {
        if (data) dispatch(setUserProfile(data))
    }).catch(e => console.log(e))
}
export const getProfileStatusTC = (userId: string | number) => (dispatch: Dispatch) => {
    profileAPI.getProfileStatus(userId).then(data => {
        if (data) dispatch(setProfileStatus(data))
    }).catch(e => console.error(e))
}

export const updateProfileStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateProfileStatus(status).then(res => {
        console.log(res)
        if (res.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    })
}