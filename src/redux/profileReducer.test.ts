import {addPostAC, deletePostAC, ProfilePageType, profileReducer} from "./profileReducer";

let state = {} as ProfilePageType
beforeEach(() => {
    state = {
        posts: [
            {id: '1', message: "Hello) How are you?", likes: 13},
            {id: '2', message: "It's my first Post)", likes: 11},
            {id: '3', message: "It's my second Post)", likes: 3},
        ],
        profile: null,
        status: 'No status'
    }
})
it('Message of new post should be correct', () => {

    const action = addPostAC('new post')
    const newState = profileReducer(state, action)

    expect(newState.posts[3].message).toBe('new post')
})

it('New post should be added', () => {

    const action = addPostAC('new post')
    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})

it('Post should be deleted', () => {

    const action = deletePostAC('1')
    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})

it('Post should not be deleted when id is incorrect', () => {

    const action = deletePostAC('4')
    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})