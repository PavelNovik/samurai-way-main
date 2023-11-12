import {PostsType, ProfilePageType, StoreActionType} from "./store";
import {v1} from "uuid";

export const profileReducer = (state: ProfilePageType, action: StoreActionType): ProfilePageType => {
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
            const newPost = action.payload.postMessage

            return {...state, newPostText: newPost}
        }

        default: return state
    }
}

export type ProfileActionType = AddPostACType | UpdateNewPostTextACType

type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD-POST",
        payload: {}
    } as const
}
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (postMessage: string) => {
    return {
        type: "UPDATE-POST",
        payload: {
            postMessage: postMessage
        }
    } as const
}
