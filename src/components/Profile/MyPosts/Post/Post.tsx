import React, {FC} from 'react';
import styles from "./Post.module.css"
import pic6 from '../../../../assets/img/pic6.jpg'

type PostPropsType = {
    message: string
    likes?: number
}
const Post: FC<PostPropsType> = ({message, likes}) => {
    return (
        <div className={styles.item}>
            <div>
                <img alt={"user avatar"} src={pic6}/>
                <span>{message}</span>
            </div>

            <div className={styles.likes}><span className={styles.likes_title}>&#10084; </span>{likes}</div>
        </div>
    );
};

export default Post;