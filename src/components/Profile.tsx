import React from 'react';
import classes from './Profile.module.css';
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}/>
            </div>
            <div>
                ava + description
            </div>
            <div>My posts
                <div>new posts</div>
                <div>
                    posts
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;