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
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}


type SetUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: AuthReducerStateType) => {
    return {
        type: 'SET-USER-DATA',
    data
    } as const
}