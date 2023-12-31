import React from 'react';
import s from "./Users.module.css";
import pic4 from "../../assets/img/pic4.jpg";
import {UserType} from "../../redux/userReducer";


type UsersFCPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    // isFetching: boolean
    users: UserType[]
    changeUserStatus: (userId: string | number) => void
    changeCurrentPage: (page:number) => void
    setTotalUserCount: (userCount: number) => void
    onPageChangeButton: ()=> void
    onPageChanged: (page: number)=> void
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
                    const onClickHandler = () => {
                        props.changeUserStatus(u.id)
                    }
                    return (
                        <div key={u.id} className={s.user}>
                            <div className={s.userAction}>
                                <img src={u.photos.small ? u.photos.small : pic4} alt="avatara"/>
                                <button onClick={onClickHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
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

