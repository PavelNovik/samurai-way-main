import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";


export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateProfileStatus: (status: string)=> void
    updateProfilePhoto: (file: File)=> void
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div className={styles.content}>
            <ProfileInfo isOwner={props.isOwner} status={props.status} profile={props.profile} updateProfileStatus={props.updateProfileStatus}
                         updateProfilePhoto={props.updateProfilePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;