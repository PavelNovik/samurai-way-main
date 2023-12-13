import {connect} from "react-redux";
import {Users} from "./Users";
import {
    changeCurrentPageAC,
    changeUserStatusAC,
    followUserAC, setTotalUserCountAC,
    setUsersAC,
    UsersStateType,
    UserType
} from "../../redux/userReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {UsersClass} from "./UsersClass";

type MapStateType = UsersStateType
type MapDispatchType = {
    onFollow: (userId: string | number) => void
    onUnfollow: (userId: string | number) => void
    setUsers: (users: UserType[]) => void
    changeUserStatus: (userId: string | number) => void
    changeCurrentPage: (page: number) => void
    setTotalUserCount: (userCount: number) => void
}

export type UsersPagePropsType = MapStateType & MapDispatchType
const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        onFollow: (userId: string | number) => dispatch(followUserAC(userId)),
        onUnfollow: (userId: string | number) => dispatch(followUserAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        changeUserStatus: (userId: string | number) => dispatch(changeUserStatusAC(userId)),
        changeCurrentPage: (page:number) => dispatch(changeCurrentPageAC(page)),
        setTotalUserCount: (userCount: number) => dispatch(setTotalUserCountAC(userCount))
    }
}
// export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)