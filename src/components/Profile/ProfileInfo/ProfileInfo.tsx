import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from './../../../assets/img/pic1.svg'
import {ProfileStatusFC} from "../ProfileStatus/ProfileStatusFC";

const ProfileInfo = ({isOwner, profile, status, ...props}: ProfilePropsType) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>)=> {
        if(e.target.files) {
            console.log(typeof e.target.files[0])
            props.updateProfilePhoto(e.target.files[0])
        }
    }

    const userProfileInfo = profile ? <div className={s.profileUserData}>
        <img className={s.mainPhoto} alt={'profile'} src={profile.photos.large ? profile.photos.large : avatar}/>
        {isOwner && <input onChange={onMainPhotoSelected} type={"file"}/>}
        <div className={s.profileUserDataInfo}>
            <span>{profile.fullName || 'My full name'}</span>
            <span>{profile.aboutMe || 'Who am I'}</span>
        </div>

        <div className={s.profileUserDataContacts}>
            <span>{profile.contacts.facebook || 'facebook'}</span>
            <span>{profile.contacts.instagram || 'instagram'}</span>
            <span>{profile.contacts.github || 'github'}</span>
            <span>{profile.contacts.vk || 'vk'}</span>
            <span>{profile.contacts.youtube || 'youtube'}</span>
            <span>{profile.contacts.mainLink || 'mainLink'}</span>
        </div>
    </div> : <></>

    return (
        <div className={s.profileInfo}>
            <div>
                <img alt={'wallpaper'}
                     src={"https://www.casa-pacifica.com/wp-content/uploads/2017/06/cropped-colorful-smoke-artistic-abstract-web-header.jpg"}/>
            </div>
            <div className={s.profileInfoDescription}>
                {!profile && <Preloader/>}
                <ProfileStatusFC updateProfileStatus={props.updateProfileStatus} status={status}/>
                {userProfileInfo}
            </div>
        </div>
    )
};

export default ProfileInfo;