import React from 'react';
import axios from "axios";
import {UsersPagePropsType} from "./UsersPageContainer";
// import {UsersFC} from "./UsersFC";

export class UsersApi extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        // if (this.props.users.length === 0) {
        //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
        //         console.log(res.data)
        //         this.props.setUsers(res.data.items)
        //         this.props.setTotalUserCount(res.data.totalCount)
        //     })
        // }
    }

    // onPageChanged(page: number) {
    //     this.props.changeCurrentPage(page)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(res => {
    //         console.log(res.data)
    //         this.props.setUsers(res.data.items)
    //     })
    // }
    //
    // onPageChangeButton() {
    //     const nextPage = this.props.currentPage + 1
    //     this.props.changeCurrentPage(nextPage)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.pageSize}`).then(res => {
    //         console.log(res.data)
    //         this.props.setUsers(res.data.items)
    //     })
    // }

    // getUsers = () => {
    //
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(res => this.props.setUsers(res.data.items))
    //     }
    // }

    render() {
        return <></>
        // const users = this.props.users

        // return <UsersFC users={this.props.users}
        //                 currentPage={this.props.currentPage}
        //                 pageSize={this.props.pageSize}
        //                 followingInProgress={this.props.followingInProgress}
        //                 totalUsersCount={this.props.totalUsersCount}
        //                 onPageChanged={this.onPageChanged.bind(this)}
        //                 onPageChangeButton={this.onPageChangeButton.bind(this)}
        //                 changeCurrentPage={this.props.changeCurrentPage}
        //                 setTotalUserCount={this.props.setTotalUserCount}
        //                 changeUserStatus={this.props.changeUserStatus}
        //                 unfollowUser={this.props.unfollowUser} followUser={this.props.followUser}
        //     // isFetching={this.props.isFetching}
        // />
    }
}

