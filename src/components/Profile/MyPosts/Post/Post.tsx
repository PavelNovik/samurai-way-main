import React, {FC} from 'react';
import styles from "./Post.module.css"

type PostPropsType = {
    message: string
}
const Post: FC<PostPropsType> = ({message}) => {
    return (
        <div className={styles.item}>
            <img alt={"user avatar"} src={"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"}/>
            <span>{message}</span>
        </div>
    );
};

export default Post;