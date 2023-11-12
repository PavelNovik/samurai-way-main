import {v1} from "uuid";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {MessagesActionType, messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarReducer";

export type UsersType = {
    id: number
    name: string
    avatar: string
}
export type MessagesType = {
    id: string
    message: string
    src: string
    isUser: boolean
}
export type PostsType = {
    id: string
    message: string
    likes: number
}
export type MessagesPageType = {
    users: UsersType[]
    messages: MessagesType[]
    newMessageText: string

}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type SidebarMenuType = {
    id: string
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

export type StoreType = {
    _state: StateType
    _subscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: StoreActionType) => void
}

export type StoreActionType = ProfileActionType | MessagesActionType

export const store: StoreType = {
    _state: {
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
                {
                    id: 6,
                    name: 'Valera',
                    avatar: "https://i.pinimg.com/236x/19/25/55/192555b6de984067f092206708913632.jpg"
                }
            ],
            messages: [
                {
                    id: v1(),
                    isUser: true,
                    message: 'Hello) How are you?',
                    src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
                },
                {
                    id: v1(),
                    isUser: false,
                    message: 'I\'m fine) Thank you! What\'s up man?',
                    src: 'https://as1.ftcdn.net/v2/jpg/01/20/57/42/1000_F_120574212_GvxCtULmstescUI0vehjptnhEphRuRW1.jpg'
                },
                {
                    id: v1(),
                    isUser: true,
                    message: 'All right!',
                    src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
                },
                {
                    id: v1(),
                    isUser: false,
                    message: 'I\'m going to the walk. Maybe you come with me?',
                    src: 'https://as1.ftcdn.net/v2/jpg/01/20/57/42/1000_F_120574212_GvxCtULmstescUI0vehjptnhEphRuRW1.jpg'
                },
                {
                    id: v1(),
                    isUser: true,
                    message: 'Ok, Let\'s go!',
                    src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
                },
            ],
            newMessageText: 'new message text'
        },
        profilePage: {
            posts: [
                {id: v1(), message: "Hello) How are you?", likes: 13},
                {id: v1(), message: "It's my first Post)", likes: 11},
                {id: v1(), message: "It's my second Post)", likes: 3},
            ],
            newPostText: 'new post text',
        },
        sidebar: {
            menu: [
                {id: v1(), title: 'Profile', path: '/profile'},
                {id: v1(), title: 'Messages', path: '/dialogs'},
                {id: v1(), title: 'News', path: '/news'},
                {id: v1(), title: 'Music', path: '/music'},
                {id: v1(), title: 'Settings', path: '/settings'},
            ],
            friends: [
                {
                    id: 1,
                    name: 'Andrew',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3jjKg5GHVT7UFqTMbGFDYgNHkdjn1KWjncYzUVO452vdH4TswaAcfwWOfLZgevshtN8&usqp=CAU"
                },
                {
                    id: 2, name: 'Dmitry', avatar: "https://oceanballoons.ru/content/photo/full/201804181640451.jpg"
                },
                {
                    id: 3,
                    name: 'Sasha',
                    avatar: "https://i.pinimg.com/originals/f3/af/3a/f3af3ab02e4ea2074d74c48770ed6784.png"
                },
            ]
        }
    },
    _subscriber() {
        console.log(this)
    },
    getState: function () {
        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer
    },

    // addPost() {
    //     const newPost: PostsType = {
    //         id: 7,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._subscriber(this.getState())
    // },
    // addMessage() {
    //
    //     const newMessage: MessagesType = {
    //         id: 7,
    //         message: this._state.messagesPage.newMessageText,
    //         isUser: true,
    //         src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
    //     }
    //     this._state.messagesPage.messages.push(newMessage)
    //     this._state.messagesPage.newMessageText = ''
    //     this._subscriber(store._state)
    // },
    // updateNewPostText(postMessage: string) {
    //
    //     this._state.profilePage.newPostText = postMessage
    //     this._subscriber(this._state)
    // },
    // updateNewMessageText(message: string) {
    //
    //     this._state.messagesPage.newMessageText = message
    //     this._subscriber(this._state)
    // },

    dispatch(action: StoreActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._subscriber(this._state)
    }

}
