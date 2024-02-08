import {AppStateType} from "./redux-store";
import {UserType} from "./userReducer";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}


const usersSelector = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}
export const getUserSuperSelector = createSelector(usersSelector, users => users)

export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType): Array<number | string> => {
    return state.usersPage.followingInProgress
}