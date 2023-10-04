import React, {FC} from 'react';
import styles from "./Post.module.css"

type PostPropsType = {
    message: string
    likes?: number
}
const Post: FC<PostPropsType> = ({message, likes}) => {
    return (
        <div className={styles.item}>
            <img alt={"user avatar"} src={"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"}/>
            <span>{message}</span>
            <div className={styles.likes}><span className={styles.likes_title}>&#10084; </span>{likes}</div>
        </div>
    );
};

export default Post;