import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img alt={'wallpaper'}
                     src={"https://www.casa-pacifica.com/wp-content/uploads/2017/06/cropped-colorful-smoke-artistic-abstract-web-header.jpg"}/>
            </div>
            <div className={s.profileInfoDescription}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;