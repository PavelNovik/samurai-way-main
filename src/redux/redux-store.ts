import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./auth-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store