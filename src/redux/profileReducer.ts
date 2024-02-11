import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/profile-api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

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
export type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    userId: number | string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: {
        small: string
        large: string
    }
}
export type ProfileRequest = Omit<ProfileType, 'photos'>

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
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-PROFILE-STATUS": {
            return {...state, status: action.status}
        }
        case "SAVE-PHOTO": {
            return state.profile ? {
                ...state,
                profile: {...state.profile, photos: action.photos}
            } : state
        }

        default:
            return state
    }
}

export type ProfileActionType = AddPostACType | SetUserProfileType | SetProfileStatus | DeletePostAC | SavePhoto

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
export type SavePhoto = ReturnType<typeof savePhoto>
export const savePhoto = (photos: { small: string, large: string }) => {
    return {
        type: 'SAVE-PHOTO',
        photos
    } as const
}

export const setUserProfileTC = (userId: string | number) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getProfileUsers(userId)
    if (data) dispatch(setUserProfile(data))
}
export const getProfileStatusTC = (userId: string | number) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getProfileStatus(userId)
    if (data) dispatch(setProfileStatus(data))
}

export const updateProfileStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateProfileStatus(status)
    if (res.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}
export const updateProfilePhotoTC = (file: File) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(file)
    if (res.resultCode === 0) {
        dispatch(savePhoto(res.data))
    }
}

export const updateProfileTC = (profile: ProfileRequest, form: string) => async (dispatch: ThunkDispatch<AppStateType, unknown, SetUserProfileType | FormAction>) => {
    const res = await profileAPI.updateProfile(profile)
    if (res.resultCode === 0) {
        await dispatch(setUserProfileTC(profile.userId))
    }
    if (res.resultCode === 1) {
        if (form === 'profile') {
            dispatch(stopSubmit('profile', {_error: res.messages.length > 0 ? res.messages[0] : 'Some Error!'}))
        } else {
            dispatch(stopSubmit('contacts', {_error: res.messages.length > 0 ? res.messages[0] : 'Some Error!'}))
        }
        return Promise.reject(res.messages[0])
    }
}