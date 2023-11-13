import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// import {StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    // state: ProfilePageType
    // dispatch: (action: StoreActionType) => void
    // store: StoreType
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
            />
        </div>
    );
};

export default Profile;