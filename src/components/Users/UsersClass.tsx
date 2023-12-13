import React from 'react';
import s from "./Users.module.css";
import pic4 from "../../assets/img/pic4.jpg";
import axios from "axios";
import {UsersPagePropsType} from "./UsersPageContainer";

export class UsersClass extends React.Component<UsersPagePropsType> {

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


    // getUsers = () => {
    //
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(res => this.props.setUsers(res.data.items))
    //     }
    // }

    render() {
        // const users = this.props.users
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.users}>
                <h2>Users</h2>
                {/*<button onClick={this.getUsers}>get users</button>*/}
                <div className={s.usersContainer}>
                    {this.props.users.map(u => {
                        const onClickHandler = () => {
                            this.props.changeUserStatus(u.id)
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
                <div>
                    {pages.map(p => {

                        return <span key={p} onClick={() => this.onPageChanged(p)}
                                     className={this.props.currentPage === p ? s.selectPage + ' ' + s.selectedPage : s.selectPage}>{p}</span>
                    })}
                    {/*<span className={s.selectPage + ' ' + s.selectedPage}>1</span>*/}
                    {/*<span className={s.selectPage}>2</span>*/}
                    {/*<span className={s.selectPage}>3</span>*/}
                    {/*<span className={s.selectPage}>4</span>*/}
                    {/*<span className={s.selectPage}>5</span>*/}
                </div>
                <div className={s.usersAction}>
                    <button>Show more</button>
                </div>
            </div>
        );
    }
}

