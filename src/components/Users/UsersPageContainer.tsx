import {connect} from "react-redux";
// import {Users} from "./Users";
import {
    changeCurrentPage, changeIsFetching,
    changeUserStatus,
    followUser, setTotalUserCount,
    setUsers, toggleIsFollowingProgress, unfollowUser,
    UsersStateType,
    UserType
} from "../../redux/userReducer";
// import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
// import {UsersApi} from "./UsersApi";
import React from "react";
import {UsersFC} from "./UsersFC";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/user-api";

type MapStateType = UsersStateType
type MapDispatchType = {
    followUser: (userId: string | number) => void
    unfollowUser: (userId: string | number) => void
    setUsers: (users: UserType[]) => void
    changeUserStatus: (userId: string | number) => void
    changeCurrentPage: (page: number) => void
    setTotalUserCount: (userCount: number) => void
    changeIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFollowingProgress: boolean, id: number | string) => void
}

export type UsersPagePropsType = MapStateType & MapDispatchType


class UsersApi extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.changeIsFetching(true)
        // if (this.props.users.length === 0) {
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.changeIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            })
        // }
    }

    onPageChanged(page: number) {
        this.props.changeIsFetching(true)
        this.props.changeCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                console.log(data)
                this.props.setUsers(data.items)
                this.props.changeIsFetching(false)
            })
    }

    onPageChangeButton() {
        this.props.changeIsFetching(true)
        const nextPage = this.props.currentPage + 1
        this.props.changeCurrentPage(nextPage)
        usersAPI.getUsers(nextPage, this.props.pageSize)
            .then(data => {
                console.log(data)
                this.props.setUsers(data.items)
                this.props.changeIsFetching(false)
            })
    }

    // getUsers = () => {
    //
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(res => this.props.setUsers(res.data.items))
    //     }
    // }

    render() {
        // const users = this.props.users

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFC users={this.props.users}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     followingInProgress={this.props.followingInProgress}
                     totalUsersCount={this.props.totalUsersCount}
                     onPageChanged={this.onPageChanged.bind(this)}
                     onPageChangeButton={this.onPageChangeButton.bind(this)}
                     changeCurrentPage={this.props.changeCurrentPage}
                     setTotalUserCount={this.props.setTotalUserCount}
                     changeUserStatus={this.props.changeUserStatus}
                     followUser={this.props.followUser}
                     unfollowUser={this.props.unfollowUser}
                     toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                // isFetching={this.props.isFetching}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
//     return {
//         followUser: (userId: string | number) => dispatch(followUser(userId)),
//         unfollowUser: (userId: string | number) => dispatch(unfollowUser(userId)),
//         setUsers: (users: UserType[]) => dispatch(setUsers(users)),
//         changeUserStatus: (userId: string | number) => dispatch(changeUserStatus(userId)),
//         changeCurrentPage: (page: number) => dispatch(changeCurrentPage(page)),
//         setTotalUserCount: (userCount: number) => dispatch(setTotalUserCount(userCount)),
//         changeIsFetching: (isFetching: boolean) => dispatch(changeIsFetching(isFetching))
//     }
// }
// export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
// export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi)
export const UsersPageContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    changeUserStatus,
    changeCurrentPage,
    setTotalUserCount,
    changeIsFetching,
    toggleIsFollowingProgress
})(UsersApi)