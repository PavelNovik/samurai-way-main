import {connect} from "react-redux";
// import {Users} from "./Users";
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
// import {UsersApi} from "./UsersApi";
import React from "react";
import axios from "axios";
import {UsersFC} from "./UsersFC";

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


class UsersApi extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
                console.log(res.data)
                this.props.setUsers(res.data.items)
                this.props.setTotalUserCount(res.data.totalCount)
            })
        }
    }

    onPageChanged(page: number) {
        this.props.changeCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(res => {
            console.log(res.data)
            this.props.setUsers(res.data.items)
        })
    }

    onPageChangeButton() {
        const nextPage = this.props.currentPage + 1
        this.props.changeCurrentPage(nextPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.pageSize}`).then(res => {
            console.log(res.data)
            this.props.setUsers(res.data.items)
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

        return <UsersFC users={this.props.users} currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount} onPageChanged={this.onPageChanged.bind(this)}
                        onPageChangeButton={this.onPageChangeButton.bind(this)}
                        changeCurrentPage={this.props.changeCurrentPage}
                        setTotalUserCount={this.props.setTotalUserCount}
                        changeUserStatus={this.props.changeUserStatus}/>
    }
}

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
export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi)