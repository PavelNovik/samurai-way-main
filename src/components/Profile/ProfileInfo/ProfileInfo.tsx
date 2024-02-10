import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from './../../../assets/img/pic6.jpg'
import {ProfileStatusFC} from "../ProfileStatus/ProfileStatusFC";

const ProfileInfo = (props: ProfilePropsType) => {

    const userProfileInfo = props.profile ? <div className={s.profileUserData}>
        <img alt={'profile'} src={props.profile.photos.large ? props.profile.photos.large : avatar}/>
        <div className={s.profileUserDataInfo}>
            <span>{props.profile.fullName || 'My full name'}</span>
            <span>{props.profile.aboutMe || 'Who am I'}</span>
        </div>

        <div className={s.profileUserDataContacts}>
            <span>{props.profile.contacts.facebook || 'facebook'}</span>
            <span>{props.profile.contacts.instagram || 'instagram'}</span>
            <span>{props.profile.contacts.github || 'github'}</span>
            <span>{props.profile.contacts.vk || 'vk'}</span>
            <span>{props.profile.contacts.youtube || 'youtube'}</span>
            <span>{props.profile.contacts.mainLink || 'mainLink'}</span>
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