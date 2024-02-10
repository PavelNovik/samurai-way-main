import React from 'react';
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import pic4 from "../../../assets/img/anonymous.webp";
import {UserType} from "../../../redux/userReducer";

type Props = {
    userData: UserType
    followUserTC: (userId: string | number) => void
    unfollowUserTC: (userId: string | number) => void
    followingInProgress: Array<number | string>
}
export const User = (props: Props) => {

    const u = props.userData
    const onFollowClickHandler = () => {
        props.followUserTC(u.id)
    }

    const onUnfollowClickHandler = () => {
        props.unfollowUserTC(u.id)
    }
    return (
        <div className={s.user}>
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
    );
};

