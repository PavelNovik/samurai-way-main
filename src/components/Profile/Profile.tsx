import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";


export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateProfileStatus: (status: string)=> void
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div className={styles.content}>
            <ProfileInfo status={props.status} profile={props.profile} updateProfileStatus={props.updateProfileStatus} />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;