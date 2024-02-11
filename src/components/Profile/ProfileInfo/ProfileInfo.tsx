import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusFC} from "../ProfileStatus/ProfileStatusFC";
import {UserProfileInfo} from "./UserProfileInfo/UserProfileInfo";

const ProfileInfo = (props: ProfilePropsType) => {

    return (
        <div className={s.profileInfo}>
            <div>
                <img alt={'wallpaper'}
                     src={"https://www.casa-pacifica.com/wp-content/uploads/2017/06/cropped-colorful-smoke-artistic-abstract-web-header.jpg"}/>
            </div>
            <div className={s.profileInfoDescription}>
                {!props.profile && <Preloader/>}
                <ProfileStatusFC updateProfileStatus={props.updateProfileStatus} status={props.status}/>

                <UserProfileInfo {...props}/>

            </div>
        </div>
    )
};

export default ProfileInfo;

