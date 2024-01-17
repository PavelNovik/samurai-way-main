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
    newPostText: string,
    profile: ProfileType | null
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
    newPostText: 'new post text',
    profile: null
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'UPDATE-POST': {
            const newPost = action.postMessage

            return {...state, newPostText: newPost}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }

        default:
            return state
    }
}

export type ProfileActionType = AddPostACType | UpdateNewPostTextACType | SetUserProfileType

type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (postMessage: string) => {
    return {
        type: "UPDATE-POST",
        postMessage: postMessage
    } as const
}

export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const setUserProfileTC = (userId: string | number) => (dispatch: Dispatch)=> {
    profileAPI.getProfileUsers(userId).then(data => {
        if(data) dispatch(setUserProfile(data))
    }).catch(e => console.log(e))
}
