import {v1} from "uuid";

export type PostsType = {
    id: string
    message: string
    likes: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hello) How are you?", likes: 13},
        {id: v1(), message: "It's my first Post)", likes: 11},
        {id: v1(), message: "It's my second Post)", likes: 3},
    ],
    newPostText: 'new post text',
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
