import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type PostsType = {
    id: number
    message: string
    likes: number
}
const Profile = () => {
    const posts: PostsType[] = [
    {id: 1, message: "Hello) How are you?", likes: 13},
    {id: 2, message: "It's my first Post)", likes: 11},
    {id: 3, message: "It's my second Post)", likes: 3},
    ]

    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;