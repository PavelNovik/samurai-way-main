import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ProfilePageType, StoreActionType} from "../../redux/store";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: StoreActionType) => void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} state={props.state}/>
        </div>
    );
};

export default Profile;