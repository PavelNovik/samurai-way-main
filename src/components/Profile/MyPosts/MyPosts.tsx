import React, {memo} from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {PostDataT, PostReduxForm} from "./Post/PostForm";

const MyPosts = memo((props: MyPostPropsType) => {
        let {posts, addNewPost} = props;



        const postsList = posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

        // const newPostElement = createRef<HTMLTextAreaElement>()
        const addNewPostHandler = (data: PostDataT) => {
            addNewPost(data.post)
        }


        return (
            <div>My posts
                <PostReduxForm onSubmit={addNewPostHandler}/>
                <div className={styles.posts}>
                    {postsList}
                </div>
            </div>
        );
    }
)
export default MyPosts;