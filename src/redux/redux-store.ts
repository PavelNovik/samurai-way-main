import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

// const composeEnhancers = compose;
// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store