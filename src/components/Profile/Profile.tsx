import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {Redirect} from "react-router-dom";


export type ProfilePropsType = {
    // children?: React.ReactNode
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