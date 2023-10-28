import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";

type ProfilePropsType = {
    posts: PostsType[]
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;