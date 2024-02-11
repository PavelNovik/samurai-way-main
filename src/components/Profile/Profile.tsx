import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileRequest, ProfileType} from "../../redux/profileReducer";


export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateProfileStatus: (status: string) => void
    updateProfilePhoto: (file: File) => void
    updateProfile: (profile: ProfileRequest, form: string) => Promise<void>
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div className={styles.content}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;