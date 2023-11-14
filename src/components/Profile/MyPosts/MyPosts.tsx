import React, {createRef, FC} from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";

const MyPosts: FC<MyPostPropsType> = ({posts, newPostText, addNewPost, updateNewPostText}) => {

    const postsList = posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

    const newPostElement = createRef<HTMLTextAreaElement>()
    const addNewPostHandler = () => {
        addNewPost()
    }

    const onPostChangeHandler = () => {
        const text = newPostElement.current?.value
        updateNewPostText(text ? text : '')
    }

    return (
        <div>My posts
            <div>
                {/*<textarea ref={textareaRef} placeholder={'your news...'}/>*/}
                <textarea ref={newPostElement} value={newPostText} placeholder={'your post...'}
                          onChange={onPostChangeHandler}/>
                {/*<button onClick={()=> console.log(el.value)}>Add Post</button>*/}
                <button onClick={addNewPostHandler}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postsList}
            </div>
        </div>
    );
};

export default MyPosts;