let rerenderEntireTree = (state: StateType) => {
    console.log('state is changed')
}
export type UsersType = {
    id: number
    name: string
    avatar: string
}
export type MessagesType = {
    id: number
    message: string
    src: string
    isUser: boolean
}
export type PostsType = {
    id: number
    message: string
    likes: number
}
export type MessagesPageType = {
    users: UsersType[]
    messages: MessagesType[]

}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type SidebarMenuType = {
    id: number
    title: string
    path: string
}


export type SidebarType = {
    menu: SidebarMenuType[]
    friends: UsersType[]
}
export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

export const state: StateType = {
    messagesPage: {
        users: [
            {
                id: 1,
                name: 'Andrew',
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3jjKg5GHVT7UFqTMbGFDYgNHkdjn1KWjncYzUVO452vdH4TswaAcfwWOfLZgevshtN8&usqp=CAU"
            },
            {id: 2, name: 'Dmitry', avatar: "https://oceanballoons.ru/content/photo/full/201804181640451.jpg"},
            {
                id: 3,
                name: 'Sasha',
                avatar: "https://i.pinimg.com/originals/f3/af/3a/f3af3ab02e4ea2074d74c48770ed6784.png"
            },
            {
                id: 4,
                name: 'Sveta',
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhB7DwE6k6D4CyKJdRJsq8YPjD7ebmtENAaBwU9XZlNbK0eVq6tyUoBdN1Jg9bhq3Eak&usqp=CAU"
            },
            {
                id: 5,
                name: 'Viktor',
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCY_5-tzmuXbYnkbG9AGETzobPZjJcOwlhX4-K-5iiC1YteCANzrHeP3cqggtFnTqsg0&usqp=CAU"
            },
            {id: 6, name: 'Valera', avatar: "https://i.pinimg.com/236x/19/25/55/192555b6de984067f092206708913632.jpg"}
        ],
        messages: [
            {
                id: 1,
                isUser: true,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur eius inventore laborum nemo rem? Ab aliquid dolorem et provident?',
                src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            },
            {
                id: 2,
                isUser: false,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur eius inventore laborum nemo rem? Ab a provident?',
                src: 'https://as1.ftcdn.net/v2/jpg/01/20/57/42/1000_F_120574212_GvxCtULmstescUI0vehjptnhEphRuRW1.jpg'
            },
            {
                id: 3,
                isUser: true,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur eius inventore laborum nemo rem? Ab a provident?',
                src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            },
            {
                id: 4,
                isUser: false,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quibusdam!',
                src: 'https://as1.ftcdn.net/v2/jpg/01/20/57/42/1000_F_120574212_GvxCtULmstescUI0vehjptnhEphRuRW1.jpg'
            },
            {
                id: 5,
                isUser: true,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit laborum nemo rem? Ab a provident?',
                src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            },
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: "Hello) How are you?", likes: 13},
            {id: 2, message: "It's my first Post)", likes: 11},
            {id: 3, message: "It's my second Post)", likes: 3},
        ],
        newPostText: 'new post text',
    },
    sidebar: {
        menu: [
            {id: 1, title: 'Profile', path: '/profile'},
            {id: 2, title: 'Messages', path: '/dialogs'},
            {id: 3, title: 'News', path: '/news'},
            {id: 4, title: 'Music', path: '/music'},
            {id: 5, title: 'Settings', path: '/settings'},
        ],
        friends: [{
            id: 1,
            name: 'Andrew',
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3jjKg5GHVT7UFqTMbGFDYgNHkdjn1KWjncYzUVO452vdH4TswaAcfwWOfLZgevshtN8&usqp=CAU"
        },
            {id: 2, name: 'Dmitry', avatar: "https://oceanballoons.ru/content/photo/full/201804181640451.jpg"},
            {
                id: 3,
                name: 'Sasha',
                avatar: "https://i.pinimg.com/originals/f3/af/3a/f3af3ab02e4ea2074d74c48770ed6784.png"
            },]
    }
}

export const addPost = () => {
    const newPost: PostsType = {
        id: 7,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    // updateNewPostText('')
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)

}
export const updateNewPostText = (postMessage: string) => {
    state.profilePage.newPostText = postMessage
    rerenderEntireTree(state)

}

export const subscribe = (observer: (state: StateType)=>void) => {
    rerenderEntireTree = observer
}