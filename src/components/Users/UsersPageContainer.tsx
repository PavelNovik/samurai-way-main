import {connect} from "react-redux";
import {Users} from "./Users";
import {followUserAC, setUsersAC, UsersStateType, UserType} from "../../redux/userReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateType = UsersStateType
type MapDispatchType = {
    onFollow: (userId: string)=> void
    onUnfollow: (userId: string)=> void
    setUsers: (users: UserType[])=> void
}

export type UsersPagePropsType = MapStateType & MapDispatchType
const mapStateToProps = (state: AppStateType): MapStateType => {
return {
    users: state.usersPage.users
}
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchType => {
return {
    onFollow: (userId:string)=> dispatch(followUserAC(userId)),
    onUnfollow: (userId:string)=> dispatch(followUserAC(userId)),
    setUsers: (users: UserType[])=> dispatch(setUsersAC(users))
}
}
export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)