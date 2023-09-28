import React from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea placeholder={'your news...'}/>
                <button>Send</button>
            </div>
            <div className={styles.posts}>
                <Post message={"Hello) How are you?"}/>
                <Post message={"It's my first Post)"}/>
                <Post message={"It's my second Post)"}/>
            </div>
        </div>
    );
};

export default MyPosts;