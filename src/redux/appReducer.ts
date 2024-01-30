import {Dispatch} from "redux";
import {setAuthUserDataTC} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

const initialState = {
    initialized: false
}
export const appReducer = (state = initialState, action: ActionType): typeof initialState => {
    switch (action.type) {
        case "SET_INITIALIZED_SUCCESS": {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

type ActionType = SetInitialized

type SetInitialized = ReturnType<typeof setInitialized>
export const setInitialized = () => {
    return {
        type: 'SET_INITIALIZED_SUCCESS'
    } as const
}

export const initializeAppTC = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    dispatch(setAuthUserDataTC()).then(res => dispatch(setInitialized()))
}