import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/userReducer";
import {Paginator} from "./Paginator/Paginator";
import {User} from "./User/User";

type UsersFCPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number | string>
    // isFetching: boolean
    users: UserType[]
    changeUserStatus: (userId: string | number) => void
    onPageChangeButton: () => void
    onPageChanged: (page: number) => void
    followUserTC: (userId: string | number) => void
    unfollowUserTC: (userId: string | number) => void
}
export const UsersFC = (props: UsersFCPropsType) => {


    return (
        <div className={s.users}>
            <h2>Users</h2>
            {/*<button onClick={this.getUsers}>get users</button>*/}
            <div className={s.usersContainer}>
                {props.users.map(u => <User key={u.id} userData={u} followingInProgress={props.followingInProgress} unfollowUserTC={props.unfollowUserTC} followUserTC={props.followUserTC}/>)}
            </div>
            {/*<div className={s.usersAction}>*/}
            {/*    <button onClick={props.onPageChangeButton}>Show next</button>*/}
            {/*</div>*/}
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

        </div>
    );
};

