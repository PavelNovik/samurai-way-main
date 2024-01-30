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

export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.getAuthData().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData({...data.data, isAuth: true}))
            }

        }
    ).catch(e => console.log(e))
}

export const loginUserTC = (data: FormData) => (dispatch: ThunkDispatch<AuthReducerStateType, unknown, ActionType | FormAction>) => {
    authAPI.loginUser(data).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataTC())
            }
            if (data.resultCode === 1) {
                dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'Some Error!'}))
            }
        }
    ).catch(e => console.log(e))
}

export const logoutUserTC = () => (dispatch: Dispatch) => {
    authAPI.logoutUser().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData({id: null, login: null, email: null, isAuth: false}))
            }
        }
    ).catch(e => console.log(e))
}