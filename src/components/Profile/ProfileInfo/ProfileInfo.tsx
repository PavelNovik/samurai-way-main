import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from './../../../assets/img/pic6.jpg'
import {ProfileStatusFC} from "../ProfileStatus/ProfileStatusFC";

const ProfileInfo = (props: ProfilePropsType) => {

    const userProfileInfo = props.profile ? <div>
        <img alt={'profile'} src={props.profile.photos.large ? props.profile.photos.large : avatar}/>
        <span>{props.profile.aboutMe}</span>
        <span>{props.profile.fullName}</span>
        <div>
            <span>{props.profile.contacts.facebook}</span>
            <span>{props.profile.contacts.instagram}</span>
            <span>{props.profile.contacts.github}</span>
            <span>{props.profile.contacts.vk}</span>
            <span>{props.profile.contacts.youtube}</span>
            <span>{props.profile.contacts.mainLink}</span>
        </div>
    </div> : <></>

    return (
        <div className={s.profileInfo}>
            <div>
                <img alt={'wallpaper'}
                     src={"https://www.casa-pacifica.com/wp-content/uploads/2017/06/cropped-colorful-smoke-artistic-abstract-web-header.jpg"}/>
            </div>
            <div className={s.profileInfoDescription}>
                {!props.profile && <Preloader/>}
                <ProfileStatusFC updateProfileStatus={props.updateProfileStatus} status={props.status}/>
                {userProfileInfo}
            </div>
        </div>
    )
};

export default ProfileInfo;