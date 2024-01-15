import {connect} from "react-redux";
// import {Users} from "./Users";
import {
    changeCurrentPage, changeIsFetching,
    changeUserStatus,
    followUser, setTotalUserCount,
    setUsers, unfollowUser,
    UsersStateType,
    UserType
} from "../../redux/userReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
// import {UsersApi} from "./UsersApi";
import React from "react";
import axios from "axios";
import {UsersFC} from "./UsersFC";
import {Preloader} from "../common/Preloader/Preloader";

type MapStateType = UsersStateType
type MapDispatchType = {
    followUser: (userId: string | number) => void
    unfollowUser: (userId: string | number) => void
    setUsers: (users: UserType[]) => void
    changeUserStatus: (userId: string | number) => void
    changeCurrentPage: (page: number) => void
    setTotalUserCount: (userCount: number) => void
    changeIsFetching: (isFetching: boolean) => void
}

export type UsersPagePropsType = MapStateType & MapDispatchType


class UsersApi extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.changeIsFetching(true)
        // if (this.props.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            console.log(res.data)
            this.props.changeIsFetching(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalUserCount(res.data.totalCount)
        })
        // }
    }

    onPageChanged(page: number) {
        this.props.changeIsFetching(true)
        this.props.changeCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(res => {
            console.log(res.data)
            this.props.setUsers(res.data.items)
            this.props.changeIsFetching(false)
        })
    }

    onPageChangeButton() {
        this.props.changeIsFetching(true)
        const nextPage = this.props.currentPage + 1
        this.props.changeCurrentPage(nextPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.pageSize}`).then(res => {
            console.log(res.data)
            this.props.setUsers(res.data.items)
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
            <UsersFC users={this.props.users} currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                     totalUsersCount={this.props.totalUsersCount} onPageChanged={this.onPageChanged.bind(this)}
                     onPageChangeButton={this.onPageChangeButton.bind(this)}
                     changeCurrentPage={this.props.changeCurrentPage}
                     setTotalUserCount={this.props.setTotalUserCount}
                     changeUserStatus={this.props.changeUserStatus}
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
        isFetching: state.usersPage.isFetching
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
    changeIsFetching
})(UsersApi)