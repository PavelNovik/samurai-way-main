import React, {FC} from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsType} from "../Profile";

type MyPostsPropsType = {
    posts: PostsType[]
}
const MyPosts: FC<MyPostsPropsType> = ({posts}) => {

    return (
        <div>My posts
            <div>
                <textarea placeholder={'your news...'}/>
                <button>Send</button>
            </div>
            <div className={styles.posts}>
                {posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)}

            </div>
        </div>
    );
};

export default MyPosts;