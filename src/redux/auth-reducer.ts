import {Dispatch} from "redux";
import {authAPI} from "../api/auth-api";
import {FormData} from "../components/Login/LoginForm";
import {ThunkDispatch} from "redux-thunk";
import {FormAction, stopSubmit} from "redux-form";


export type AuthReducerStateType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    // isFetching: boolean
}

type ActionType = SetUserDataACType

const initialState: AuthReducerStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
}
export const authReducer = (state = initialState, action: ActionType): AuthReducerStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.payload}
        default:
            return state
    }
}


type SetUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = ({id, login, email, isAuth}: AuthReducerStateType) => {
    const payload = {id, login, email, isAuth}
    return {
        type: 'SET-USER-DATA',
        payload
    } as const
}

export const setAuthUserDataTC = () => async (dispatch: Dispatch) => {
    try {
        let data = await authAPI.getAuthData();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData({...data.data, isAuth: true}))
        }
    } catch (e) {
        return console.log(e);
    }
}

export const loginUserTC = (data: FormData) => async (dispatch: ThunkDispatch<AuthReducerStateType, unknown, ActionType | FormAction>) => {
    try {
        const res = await authAPI.loginUser(data)
        if (res.resultCode === 0) {
            dispatch(setAuthUserDataTC())
        }
        if (res.resultCode === 1) {
            dispatch(stopSubmit('login', {_error: res.messages.length > 0 ? res.messages[0] : 'Some Error!'}))
        }
    } catch (e) {
        console.log(e)
    }
}

export const logoutUserTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.logoutUser()
        if (res.resultCode === 0) {
            dispatch(setAuthUserData({id: null, login: null, email: null, isAuth: false}))
        }
    } catch (e) {
        console.log(e)
    }
}