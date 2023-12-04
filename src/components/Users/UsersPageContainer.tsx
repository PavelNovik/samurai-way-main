import {connect} from "react-redux";
import {Users} from "./Users";
import {changeUserStatusAC, followUserAC, setUsersAC, UsersStateType, UserType} from "../../redux/userReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateType = UsersStateType
type MapDispatchType = {
    onFollow: (userId: string | number) => void
    onUnfollow: (userId: string | number) => void
    setUsers: (users: UserType[]) => void
    changeUserStatus: (userId: string | number) => void
}

export type UsersPagePropsType = MapStateType & MapDispatchType
const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        onFollow: (userId: string | number) => dispatch(followUserAC(userId)),
        onUnfollow: (userId: string | number) => dispatch(followUserAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        changeUserStatus: (userId: string | number) => dispatch(changeUserStatusAC(userId))
    }
}
export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)