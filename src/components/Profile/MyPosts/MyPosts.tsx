import React, {FC} from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType[]
}
const MyPosts: FC<MyPostsPropsType> = ({posts}) => {

    const postsList = posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

    return (
        <div>My posts
            <div>
                <textarea placeholder={'your news...'}/>
                <button>Send</button>
            </div>
            <div className={styles.posts}>
                {postsList}
            </div>
        </div>
    );
};

export default MyPosts;