import React from 'react';
import s from "./Users.module.css";
import pic4 from "../../assets/img/pic4.jpg";
import {UserType} from "../../redux/userReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersFCPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number | string>
    // isFetching: boolean
    users: UserType[]
    changeUserStatus: (userId: string | number) => void
    followUser: (userId: string | number) => void
    unfollowUser: (userId: string | number) => void
    changeCurrentPage: (page: number) => void
    setTotalUserCount: (userCount: number) => void
    onPageChangeButton: () => void
    onPageChanged: (page: number) => void
    toggleIsFollowingProgress: (isFollowingProgress: boolean, id: number | string) => void
}
export const UsersFC = (props: UsersFCPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className={s.users}>
            <h2>Users</h2>
            {/*<button onClick={this.getUsers}>get users</button>*/}
            <div className={s.usersContainer}>
                {props.users.map(u => {
                    const onFollowClickHandler = () => {
                        props.toggleIsFollowingProgress(true, u.id)
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true, headers: {
                                "API-KEY": "58d16126-c44d-4aae-84b6-9bdc00838cf2"
                            }
                        }).then(res => {
                            console.log(res)
                            if (res.data.resultCode === 0) {
                                props.followUser(u.id)
                            }
                        }).catch(e => {
                            console.log(e)
                        }).finally(() => props.toggleIsFollowingProgress(false,u.id))
                    }

                    const onUnfollowClickHandler = () => {
                        props.toggleIsFollowingProgress(true, u.id)
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true, headers: {
                                "API-KEY": "58d16126-c44d-4aae-84b6-9bdc00838cf2"
                            }
                        }).then(res => {
                            console.log(res)
                            if (res.data.resultCode === 0) {
                                props.unfollowUser(u.id)
                            }
                        }).catch(e => {
                            console.log(e)
                        }).finally(() => props.toggleIsFollowingProgress(false,u.id))
                    }
                    return (
                        <div key={u.id} className={s.user}>
                            <div className={s.userAction}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small ? u.photos.small : pic4} alt="avatara"/>
                                </NavLink>
                                {!u.followed && <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                        onClick={onFollowClickHandler}> Follow</button>}
                                {u.followed && <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                       onClick={onUnfollowClickHandler}> Unfollow</button>}
                            </div>
                            <div className={s.userInfo}>
                                <div className={s.userName}>
                                    <span>{u.name}</span>
                                    <span>{u.status}</span>
                                </div>
                                <div className={s.userLocation}>
                                    <span>{u.location ? u.location.country : 'Bel'},</span>
                                    <span>{u.location ? u.location.city : 'Sluck'}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={s.usersAction}>
                <button onClick={props.onPageChangeButton}>Show next</button>
            </div>
            <div>
                {pages.map(p => {

                    return <span key={p} onClick={() => props.onPageChanged(p)}
                                 className={props.currentPage === p ? s.selectPage + ' ' + s.selectedPage : s.selectPage}>{p}</span>
                })}
            </div>

        </div>
    );
};

