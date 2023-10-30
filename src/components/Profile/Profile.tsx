import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ProfilePageType, updateNewPostText} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    updateNewPostText: (title: string) => void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.state.newPostText} posts={props.state.posts}/>
        </div>
    );
};

export default Profile;